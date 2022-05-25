// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";

import "hardhat/console.sol";

contract FixedMarket is EIP712("Fixed Order Market", "1.0") {
    using SafeERC20 for IERC20;
    using Address for address payable;

    struct Order {
        address maker;
        IERC20 makerToken;
        IERC20 takerToken;
        uint256 makingAmount;
        uint256 takingAmount;
        uint256 expireTime;
        uint256 salt;
    }

    bytes32 public constant FIXED_ORDER_TYPE_HASH =
        keccak256(
            "Order(address maker,address makerToken,address takerToken,uint256 makingAmount,uint256 takingAmount,uint256 expireTime,uint256 salt)"
        );

    mapping(address => mapping(bytes32 => bool)) private orderClosed;

    uint256 public makerFee;
    uint256 public takerFee;
    uint256 public constant FEE_DENOMINATOR = 10000;
    address public feeRecipient;

    event OrderFilled(bytes32 orderHash, address taker, uint256 makingAmount);

    event OrderCancelled(bytes32 orderHash, address maker);

    event FeeChanged(uint256 makerFee, uint256 takerFee);

    event FeeRecipientChanged(address feeRecipient);

    constructor(
        uint256 _makerFee,
        uint256 _takerFee,
        address _feeRecipient
    ) {
        makerFee = _makerFee;
        takerFee = _takerFee;
        feeRecipient = _feeRecipient;
    }

    function hashOrder(Order memory order) public view returns (bytes32) {
        return
            _hashTypedDataV4(
                keccak256(abi.encode(FIXED_ORDER_TYPE_HASH, order))
            );
    }

    function cancelOrder(bytes32 _orderHash) external {
        orderClosed[msg.sender][_orderHash] = true;

        emit OrderCancelled(_orderHash, msg.sender);
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
            IERC20(_tokenAddress).safeTransferFrom(
                _from,
                feeRecipient,
                feeAmount
            );
        }

        return _amount - feeAmount;
    }

    function fillOrder(Order memory _order, bytes calldata _signature)
        external
        payable
    {
        address maker = _order.maker;

        require(
            address(_order.makerToken) != address(0),
            "invalid maker token"
        );

        bytes32 orderHash = hashOrder(_order);

        require(
            SignatureChecker.isValidSignatureNow(maker, orderHash, _signature),
            "bad signature"
        );

        require(block.timestamp <= _order.expireTime, "order expired");
        require(!orderClosed[_order.maker][orderHash], "order closed");

        orderClosed[_order.maker][orderHash] = true;

        uint256 makingAmount = _order.makingAmount;
        uint256 takingAmount = _order.takingAmount;

        require(makingAmount > 0 && takingAmount > 0, "can't swap 0 amount");

        uint256 takerReceiveAmount = _takeFee(
            maker,
            address(_order.makerToken),
            makingAmount,
            takerFee
        );

        uint256 makerReceiveAmount = _takeFee(
            msg.sender,
            address(_order.takerToken),
            takingAmount,
            makerFee
        );

        // Maker => Taker: only ERC20
        _order.makerToken.safeTransferFrom(
            maker,
            msg.sender,
            takerReceiveAmount
        );

        // Taker => Maker
        if (address(_order.takerToken) == address(0)) {
            require(msg.value == takingAmount, "invalid eth value");
            payable(maker).sendValue(makerReceiveAmount);
        } else {
            _order.takerToken.safeTransferFrom(
                msg.sender,
                maker,
                makerReceiveAmount
            );
        }

        emit OrderFilled(orderHash, msg.sender, makingAmount);
    }
}
