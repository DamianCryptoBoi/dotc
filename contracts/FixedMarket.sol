// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.11;

import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/cryptography/SignatureChecker.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract FixedMarket is EIP712("Fixed Order Market", "1.0") {
    using SafeERC20 for IERC20;

    event OrderFilled(bytes32 orderHash, address taker, uint256 makingAmount);

    event OrderCancelled(bytes32 orderHash, address maker);

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

    function fillOrder(Order memory _order, bytes calldata _signature)
        external
    {
        address maker = _order.maker;

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

        // Maker => Taker, Taker => Maker
        _order.makerToken.safeTransferFrom(maker, msg.sender, makingAmount);
        _order.takerToken.safeTransferFrom(msg.sender, maker, takingAmount);

        emit OrderFilled(orderHash, msg.sender, makingAmount);
    }
}
