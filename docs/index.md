# D-OTC SC

## EscrowMarket

### Order

```solidity
struct Order {
  address maker;
  address makerToken;
  address takerToken;
  uint256 makingAmount;
  uint256 takingAmount;
  uint256 filled;
  uint256 expireTime;
}

```

### OrderCreated

```solidity
event OrderCreated(uint256 id, address maker, address makerToken, address takerToken, uint256 makingAmount, uint256 takingAmount, uint256 expireTime)
```

### OrderFilled

```solidity
event OrderFilled(uint256 id, address taker, uint256 makingAmount, uint256 takingAmount)
```

### OrderCancelled

```solidity
event OrderCancelled(uint256 id)
```

### order

```solidity
mapping(uint256 &#x3D;&gt; struct EscrowMarket.Order) order
```

### nextOrderId

```solidity
uint256 nextOrderId
```

### constructor

```solidity
constructor() public
```

### initialize

```solidity
function initialize() public
```

### pause

```solidity
function pause() external
```

### unPause

```solidity
function unPause() external
```

### createOrder

```solidity
function createOrder(address _makerToken, address _takerToken, uint256 _makingAmount, uint256 _takingAmount, uint256 _expireTime) external
```

### fillOrder

```solidity
function fillOrder(uint256 _id, uint256 _acceptedMakingAmount) external
```

### cancelOrder

```solidity
function cancelOrder(uint256 _id) external
```

### \_authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation) internal
```

\_Function that should revert when &#x60;msg.sender&#x60; is not authorized to upgrade the contract. Called by
{upgradeTo} and {upgradeToAndCall}.

Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.

&#x60;&#x60;&#x60;solidity
function _authorizeUpgrade(address) internal override onlyOwner {}
&#x60;&#x60;&#x60;_

## FixedMarket

### OrderFilled

```solidity
event OrderFilled(bytes32 orderHash, address taker, uint256 makingAmount)
```

### OrderCancelled

```solidity
event OrderCancelled(bytes32 orderHash, address maker)
```

### Order

```solidity
struct Order {
  address maker;
  contract IERC20 makerToken;
  contract IERC20 takerToken;
  uint256 makingAmount;
  uint256 takingAmount;
  uint256 expireTime;
  uint256 salt;
}
```

### FIXED_ORDER_TYPE_HASH

```solidity
bytes32 FIXED_ORDER_TYPE_HASH
```

### orderClosed

```solidity
mapping(address &#x3D;&gt; mapping(bytes32 &#x3D;&gt; bool)) orderClosed
```

### hashOrder

```solidity
function hashOrder(struct FixedMarket.Order order) public view returns (bytes32)
```

### cancelOrder

```solidity
function cancelOrder(bytes32 _orderHash) external
```

### fillOrder

```solidity
function fillOrder(struct FixedMarket.Order _order, bytes _signature) external
```
