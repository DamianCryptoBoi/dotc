// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.11;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";

contract EscrowMarket is
    Initializable,
    PausableUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    using SafeERC20Upgradeable for IERC20Upgradeable;
    using AddressUpgradeable for address payable;

    struct Order {
        address maker;
        address makerToken;
        address takerToken;
        uint256 makingAmount;
        uint256 takingAmount;
        uint256 filled;
        uint256 expireTime;
    }

    event OrderCreated(
        uint256 id,
        address maker,
        address makerToken,
        address takerToken,
        uint256 makingAmount,
        uint256 takingAmount,
        uint256 expireTime
    );

    event OrderFilled(
        uint256 id,
        address taker,
        uint256 makingAmount,
        uint256 takingAmount
    );

    event OrderCancelled(uint256 id);

    event FeeChanged(uint256 makerFee, uint256 takerFee);

    event FeeRecipientChanged(address feeRecipient);

    mapping(uint256 => Order) public order;
    uint256 public nextOrderId;

    uint256 public makerFee;
    uint256 public takerFee;
    uint256 public constant FEE_DENOMINATOR = 10000;
    address public feeRecipient;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize(
        uint256 _makerFee,
        uint256 _takerFee,
        address _feeRecipient
    ) public initializer {
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
        makerFee = _makerFee;
        takerFee = _takerFee;
        feeRecipient = _feeRecipient;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unPause() external onlyOwner {
        _unpause();
    }

    function setFee(uint256 _makerFee, uint256 _takerFee) external onlyOwner {
        makerFee = _makerFee;
        takerFee = _takerFee;
        emit FeeChanged(_makerFee, _takerFee);
    }

    function setFeeRecipient(address _feeRecipient) external onlyOwner {
        feeRecipient = _feeRecipient;
        emit FeeRecipientChanged(_feeRecipient);
    }

    function _takeFee(
        address _from,
        address _tokenAddress,
        uint256 _amount,
        uint256 _feeRatio
    ) private returns (uint256) {
        uint256 feeAmount = (_amount * _feeRatio) / FEE_DENOMINATOR;

        if (_tokenAddress == address(0)) {
            payable(feeRecipient).sendValue(feeAmount);
        } else {
            if (_from == address(this)) {
                IERC20Upgradeable(_tokenAddress).safeTransfer(
                    feeRecipient,
                    feeAmount
                );
            } else {
                IERC20Upgradeable(_tokenAddress).safeTransferFrom(
                    _from,
                    feeRecipient,
                    feeAmount
                );
            }
        }

        return _amount - feeAmount;
    }

    function createOrder(
        address _makerToken,
        address _takerToken,
        uint256 _makingAmount,
        uint256 _takingAmount,
        uint256 _expireTime
    ) external payable whenNotPaused {
        require(_makerToken != _takerToken, "invalid token");
        uint256 currentId = nextOrderId;
        nextOrderId++;

        order[currentId] = Order(
            msg.sender,
            _makerToken,
            _takerToken,
            _makingAmount,
            _takingAmount,
            0,
            _expireTime
        );

        if (_makerToken == address(0)) {
            require(msg.value == _makingAmount, "invalid eth value");
        } else {
            IERC20Upgradeable(_makerToken).safeTransferFrom(
                msg.sender,
                address(this),
                _makingAmount
            );
        }

        emit OrderCreated(
            currentId,
            msg.sender,
            _makerToken,
            _takerToken,
            _makingAmount,
            _takingAmount,
            _expireTime
        );
    }

    function fillOrder(uint256 _id, uint256 _giveAmount)
        external
        payable
        whenNotPaused
    {
        Order storage acceptedOrder = order[_id];

        require(block.timestamp < acceptedOrder.expireTime, "order expired");

        uint256 fillAmount = (_giveAmount * acceptedOrder.makingAmount) /
            acceptedOrder.takingAmount;

        require(_giveAmount > 0 && fillAmount > 0, "invalid amounts");

        require(
            acceptedOrder.filled + fillAmount <= acceptedOrder.makingAmount,
            "amount too high or closed order"
        );
        acceptedOrder.filled += fillAmount;

        //transfer fee and calculate amounts

        uint256 makerAmount = _takeFee(
            msg.sender,
            acceptedOrder.takerToken,
            _giveAmount,
            takerFee
        );

        uint256 takerAmount = _takeFee(
            address(this),
            acceptedOrder.makerToken,
            fillAmount,
            makerFee
        );

        // $ from taker => maker
        if (acceptedOrder.takerToken == address(0)) {
            require(msg.value == _giveAmount, "invalid eth value");
            payable(acceptedOrder.maker).sendValue(makerAmount);
        } else {
            IERC20Upgradeable(acceptedOrder.takerToken).safeTransferFrom(
                msg.sender,
                acceptedOrder.maker,
                makerAmount
            );
        }

        // $ from contract => taker
        if (acceptedOrder.makerToken == address(0)) {
            payable(msg.sender).sendValue(takerAmount);
        } else {
            IERC20Upgradeable(acceptedOrder.makerToken).safeTransfer(
                msg.sender,
                takerAmount
            );
        }

        emit OrderFilled(_id, msg.sender, fillAmount, _giveAmount);
    }

    function cancelOrder(uint256 _id) external whenNotPaused {
        Order storage canceledOrder = order[_id];

        require(msg.sender == canceledOrder.maker, "not maker");
        require(
            canceledOrder.filled < canceledOrder.makingAmount,
            "closed order"
        );

        uint256 remainingAmount = canceledOrder.makingAmount -
            canceledOrder.filled;

        canceledOrder.filled = canceledOrder.makingAmount;

        if (canceledOrder.makerToken == address(0)) {
            payable(canceledOrder.maker).sendValue(remainingAmount);
        } else {
            IERC20Upgradeable(canceledOrder.makerToken).transfer(
                canceledOrder.maker,
                remainingAmount
            );
        }

        emit OrderCancelled(_id);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}
}
