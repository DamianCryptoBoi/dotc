// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.11;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

contract EscrowMarket is
    Initializable,
    PausableUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    using SafeERC20Upgradeable for IERC20Upgradeable;

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

    mapping(uint256 => Order) public order;
    uint256 public nextOrderId;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize() public initializer {
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function createOrder(
        address _makerToken,
        address _takerToken,
        uint256 _makingAmount,
        uint256 _takingAmount,
        uint256 _expireTime
    ) external whenNotPaused {
        uint256 currentId = nextOrderId;
        nextOrderId++;
        IERC20Upgradeable(_makerToken).safeTransferFrom(
            msg.sender,
            address(this),
            _makingAmount
        );
        order[currentId] = Order(
            msg.sender,
            _makerToken,
            _takerToken,
            _makingAmount,
            _takingAmount,
            0,
            _expireTime
        );

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

    function fillOrder(uint256 _id, uint256 _acceptedMakingAmount)
        external
        whenNotPaused
    {
        Order storage acceptedOrder = order[_id];

        require(
            acceptedOrder.filled + _acceptedMakingAmount <=
                acceptedOrder.makingAmount,
            "amount too high or closed order"
        );
        acceptedOrder.filled += _acceptedMakingAmount;

        require(block.timestamp < acceptedOrder.expireTime, "order expired");

        uint256 acceptedTakingAmount = (
            (_acceptedMakingAmount * acceptedOrder.takingAmount)
        ) / acceptedOrder.makingAmount;

        require(acceptedTakingAmount > 0, "amount too low");

        // move takerToken from sender to maker
        IERC20Upgradeable(acceptedOrder.takerToken).safeTransferFrom(
            msg.sender,
            acceptedOrder.maker,
            acceptedTakingAmount
        );

        // moke token A from contract to sender
        IERC20Upgradeable(acceptedOrder.makerToken).safeTransfer(
            msg.sender,
            _acceptedMakingAmount
        );

        emit OrderFilled(
            _id,
            msg.sender,
            _acceptedMakingAmount,
            acceptedTakingAmount
        );
    }

    function cancelOrder(uint256 _id) external whenNotPaused {
        Order storage canceledOrder = order[_id];

        require(msg.sender == canceledOrder.maker, "not maker");
        require(
            canceledOrder.filled < canceledOrder.makingAmount,
            "closed order"
        );

        require(block.timestamp <= canceledOrder.expireTime, "expired");

        uint256 remainingToken = canceledOrder.makingAmount -
            canceledOrder.filled;

        canceledOrder.filled = canceledOrder.makingAmount;

        IERC20Upgradeable(canceledOrder.makerToken).transfer(
            canceledOrder.maker,
            remainingToken
        );

        emit OrderCancelled(_id);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}
}
