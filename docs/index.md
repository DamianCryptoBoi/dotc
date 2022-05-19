# Solidity API

## OwnableUpgradeable

_Contract module which provides a basic access control mechanism, where
there is an account (an owner) that can be granted exclusive access to
specific functions.

By default, the owner account will be the one that deploys the contract. This
can later be changed with {transferOwnership}.

This module is used through inheritance. It will make available the modifier
&#x60;onlyOwner&#x60;, which can be applied to your functions to restrict their use to
the owner._

### _owner

```solidity
address _owner
```

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

### __Ownable_init

```solidity
function __Ownable_init() internal
```

_Initializes the contract setting the deployer as the initial owner._

### __Ownable_init_unchained

```solidity
function __Ownable_init_unchained() internal
```

### owner

```solidity
function owner() public view virtual returns (address)
```

_Returns the address of the current owner._

### onlyOwner

```solidity
modifier onlyOwner()
```

_Throws if called by any account other than the owner._

### renounceOwnership

```solidity
function renounceOwnership() public virtual
```

_Leaves the contract without owner. It will not be possible to call
&#x60;onlyOwner&#x60; functions anymore. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby removing any functionality that is only available to the owner._

### transferOwnership

```solidity
function transferOwnership(address newOwner) public virtual
```

_Transfers ownership of the contract to a new account (&#x60;newOwner&#x60;).
Can only be called by the current owner._

### _transferOwnership

```solidity
function _transferOwnership(address newOwner) internal virtual
```

_Transfers ownership of the contract to a new account (&#x60;newOwner&#x60;).
Internal function without access restriction._

### __gap

```solidity
uint256[49] __gap
```

_This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps_

## IERC1822ProxiableUpgradeable

_ERC1822: Universal Upgradeable Proxy Standard (UUPS) documents a method for upgradeability through a simplified
proxy whose upgrades are fully controlled by the current implementation._

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```

_Returns the storage slot that the proxiable contract assumes is being used to store the implementation
address.

IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks
bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this
function revert if invoked through a proxy._

## ERC1967UpgradeUpgradeable

_This abstract contract provides getters and event emitting update functions for
https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots.

_Available since v4.1.__

### __ERC1967Upgrade_init

```solidity
function __ERC1967Upgrade_init() internal
```

### __ERC1967Upgrade_init_unchained

```solidity
function __ERC1967Upgrade_init_unchained() internal
```

### _ROLLBACK_SLOT

```solidity
bytes32 _ROLLBACK_SLOT
```

### _IMPLEMENTATION_SLOT

```solidity
bytes32 _IMPLEMENTATION_SLOT
```

_Storage slot with the address of the current implementation.
This is the keccak-256 hash of &quot;eip1967.proxy.implementation&quot; subtracted by 1, and is
validated in the constructor._

### Upgraded

```solidity
event Upgraded(address implementation)
```

_Emitted when the implementation is upgraded._

### _getImplementation

```solidity
function _getImplementation() internal view returns (address)
```

_Returns the current implementation address._

### _setImplementation

```solidity
function _setImplementation(address newImplementation) private
```

_Stores a new address in the EIP1967 implementation slot._

### _upgradeTo

```solidity
function _upgradeTo(address newImplementation) internal
```

_Perform implementation upgrade

Emits an {Upgraded} event._

### _upgradeToAndCall

```solidity
function _upgradeToAndCall(address newImplementation, bytes data, bool forceCall) internal
```

_Perform implementation upgrade with additional setup call.

Emits an {Upgraded} event._

### _upgradeToAndCallUUPS

```solidity
function _upgradeToAndCallUUPS(address newImplementation, bytes data, bool forceCall) internal
```

_Perform implementation upgrade with security checks for UUPS proxies, and additional setup call.

Emits an {Upgraded} event._

### _ADMIN_SLOT

```solidity
bytes32 _ADMIN_SLOT
```

_Storage slot with the admin of the contract.
This is the keccak-256 hash of &quot;eip1967.proxy.admin&quot; subtracted by 1, and is
validated in the constructor._

### AdminChanged

```solidity
event AdminChanged(address previousAdmin, address newAdmin)
```

_Emitted when the admin account has changed._

### _getAdmin

```solidity
function _getAdmin() internal view returns (address)
```

_Returns the current admin._

### _setAdmin

```solidity
function _setAdmin(address newAdmin) private
```

_Stores a new address in the EIP1967 admin slot._

### _changeAdmin

```solidity
function _changeAdmin(address newAdmin) internal
```

_Changes the admin of the proxy.

Emits an {AdminChanged} event._

### _BEACON_SLOT

```solidity
bytes32 _BEACON_SLOT
```

_The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.
This is bytes32(uint256(keccak256(&#x27;eip1967.proxy.beacon&#x27;)) - 1)) and is validated in the constructor._

### BeaconUpgraded

```solidity
event BeaconUpgraded(address beacon)
```

_Emitted when the beacon is upgraded._

### _getBeacon

```solidity
function _getBeacon() internal view returns (address)
```

_Returns the current beacon._

### _setBeacon

```solidity
function _setBeacon(address newBeacon) private
```

_Stores a new beacon in the EIP1967 beacon slot._

### _upgradeBeaconToAndCall

```solidity
function _upgradeBeaconToAndCall(address newBeacon, bytes data, bool forceCall) internal
```

_Perform beacon upgrade with additional setup call. Note: This upgrades the address of the beacon, it does
not upgrade the implementation contained in the beacon (see {UpgradeableBeacon-_setImplementation} for that).

Emits a {BeaconUpgraded} event._

### _functionDelegateCall

```solidity
function _functionDelegateCall(address target, bytes data) private returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-string-}[&#x60;functionCall&#x60;],
but performing a delegate call.

_Available since v3.4.__

### __gap

```solidity
uint256[50] __gap
```

_This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps_

## IBeaconUpgradeable

_This is the interface that {BeaconProxy} expects of its beacon._

### implementation

```solidity
function implementation() external view returns (address)
```

_Must return an address that can be used as a delegate call target.

{BeaconProxy} will check that this address is a contract._

## Initializable

_This is a base contract to aid in writing upgradeable contracts, or any kind of contract that will be deployed
behind a proxy. Since proxied contracts do not make use of a constructor, it&#x27;s common to move constructor logic to an
external initializer function, usually called &#x60;initialize&#x60;. It then becomes necessary to protect this initializer
function so it can only be called once. The {initializer} modifier provided by this contract will have this effect.

The initialization functions use a version number. Once a version number is used, it is consumed and cannot be
reused. This mechanism prevents re-execution of each &quot;step&quot; but allows the creation of new initialization steps in
case an upgrade adds a module that needs to be initialized.

For example:

[.hljs-theme-light.nopadding]
&#x60;&#x60;&#x60;
contract MyToken is ERC20Upgradeable {
    function initialize() initializer public {
        __ERC20_init(&quot;MyToken&quot;, &quot;MTK&quot;);
    }
}
contract MyTokenV2 is MyToken, ERC20PermitUpgradeable {
    function initializeV2() reinitializer(2) public {
        __ERC20Permit_init(&quot;MyToken&quot;);
    }
}
&#x60;&#x60;&#x60;

TIP: To avoid leaving the proxy in an uninitialized state, the initializer function should be called as early as
possible by providing the encoded function call as the &#x60;_data&#x60; argument to {ERC1967Proxy-constructor}.

CAUTION: When used with inheritance, manual care must be taken to not invoke a parent initializer twice, or to ensure
that all initializers are idempotent. This is not verified automatically as constructors are by Solidity.

[CAUTION]
&#x3D;&#x3D;&#x3D;&#x3D;
Avoid leaving a contract uninitialized.

An uninitialized contract can be taken over by an attacker. This applies to both a proxy and its implementation
contract, which may impact the proxy. To prevent the implementation contract from being used, you should invoke
the {_disableInitializers} function in the constructor to automatically lock it when it is deployed:

[.hljs-theme-light.nopadding]
&#x60;&#x60;&#x60;
/// @custom:oz-upgrades-unsafe-allow constructor
constructor() {
    _disableInitializers();
}
&#x60;&#x60;&#x60;
&#x3D;&#x3D;&#x3D;&#x3D;_

### _initialized

```solidity
uint8 _initialized
```

_Indicates that the contract has been initialized._

### _initializing

```solidity
bool _initializing
```

_Indicates that the contract is in the process of being initialized._

### Initialized

```solidity
event Initialized(uint8 version)
```

_Triggered when the contract has been initialized or reinitialized._

### initializer

```solidity
modifier initializer()
```

_A modifier that defines a protected initializer function that can be invoked at most once. In its scope,
&#x60;onlyInitializing&#x60; functions can be used to initialize parent contracts. Equivalent to &#x60;reinitializer(1)&#x60;._

### reinitializer

```solidity
modifier reinitializer(uint8 version)
```

_A modifier that defines a protected reinitializer function that can be invoked at most once, and only if the
contract hasn&#x27;t been initialized to a greater version before. In its scope, &#x60;onlyInitializing&#x60; functions can be
used to initialize parent contracts.

&#x60;initializer&#x60; is equivalent to &#x60;reinitializer(1)&#x60;, so a reinitializer may be used after the original
initialization step. This is essential to configure modules that are added through upgrades and that require
initialization.

Note that versions can jump in increments greater than 1; this implies that if multiple reinitializers coexist in
a contract, executing them in the right order is up to the developer or operator._

### onlyInitializing

```solidity
modifier onlyInitializing()
```

_Modifier to protect an initialization function so that it can only be invoked by functions with the
{initializer} and {reinitializer} modifiers, directly or indirectly._

### _disableInitializers

```solidity
function _disableInitializers() internal virtual
```

_Locks the contract, preventing any future reinitialization. This cannot be part of an initializer call.
Calling this in the constructor of a contract will prevent that contract from being initialized or reinitialized
to any version. It is recommended to use this to lock implementation contracts that are designed to be called
through proxies._

### _setInitializedVersion

```solidity
function _setInitializedVersion(uint8 version) private returns (bool)
```

## UUPSUpgradeable

_An upgradeability mechanism designed for UUPS proxies. The functions included here can perform an upgrade of an
{ERC1967Proxy}, when this contract is set as the implementation behind such a proxy.

A security mechanism ensures that an upgrade does not turn off upgradeability accidentally, although this risk is
reinstated if the upgrade retains upgradeability but removes the security mechanism, e.g. by replacing
&#x60;UUPSUpgradeable&#x60; with a custom implementation of upgrades.

The {_authorizeUpgrade} function must be overridden to include access restriction to the upgrade mechanism.

_Available since v4.1.__

### __UUPSUpgradeable_init

```solidity
function __UUPSUpgradeable_init() internal
```

### __UUPSUpgradeable_init_unchained

```solidity
function __UUPSUpgradeable_init_unchained() internal
```

### __self

```solidity
address __self
```

### onlyProxy

```solidity
modifier onlyProxy()
```

_Check that the execution is being performed through a delegatecall call and that the execution context is
a proxy contract with an implementation (as defined in ERC1967) pointing to self. This should only be the case
for UUPS and transparent proxies that are using the current contract as their implementation. Execution of a
function through ERC1167 minimal proxies (clones) would not normally pass this test, but is not guaranteed to
fail._

### notDelegated

```solidity
modifier notDelegated()
```

_Check that the execution is not being performed through a delegate call. This allows a function to be
callable on the implementing contract but not through proxies._

### proxiableUUID

```solidity
function proxiableUUID() external view virtual returns (bytes32)
```

_Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the
implementation. It is used to validate that the this implementation remains valid after an upgrade.

IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks
bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this
function revert if invoked through a proxy. This is guaranteed by the &#x60;notDelegated&#x60; modifier._

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external virtual
```

_Upgrade the implementation of the proxy to &#x60;newImplementation&#x60;.

Calls {_authorizeUpgrade}.

Emits an {Upgraded} event._

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable virtual
```

_Upgrade the implementation of the proxy to &#x60;newImplementation&#x60;, and subsequently execute the function call
encoded in &#x60;data&#x60;.

Calls {_authorizeUpgrade}.

Emits an {Upgraded} event._

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation) internal virtual
```

_Function that should revert when &#x60;msg.sender&#x60; is not authorized to upgrade the contract. Called by
{upgradeTo} and {upgradeToAndCall}.

Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.

&#x60;&#x60;&#x60;solidity
function _authorizeUpgrade(address) internal override onlyOwner {}
&#x60;&#x60;&#x60;_

### __gap

```solidity
uint256[50] __gap
```

_This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps_

## PausableUpgradeable

_Contract module which allows children to implement an emergency stop
mechanism that can be triggered by an authorized account.

This module is used through inheritance. It will make available the
modifiers &#x60;whenNotPaused&#x60; and &#x60;whenPaused&#x60;, which can be applied to
the functions of your contract. Note that they will not be pausable by
simply including this module, only once the modifiers are put in place._

### Paused

```solidity
event Paused(address account)
```

_Emitted when the pause is triggered by &#x60;account&#x60;._

### Unpaused

```solidity
event Unpaused(address account)
```

_Emitted when the pause is lifted by &#x60;account&#x60;._

### _paused

```solidity
bool _paused
```

### __Pausable_init

```solidity
function __Pausable_init() internal
```

_Initializes the contract in unpaused state._

### __Pausable_init_unchained

```solidity
function __Pausable_init_unchained() internal
```

### paused

```solidity
function paused() public view virtual returns (bool)
```

_Returns true if the contract is paused, and false otherwise._

### whenNotPaused

```solidity
modifier whenNotPaused()
```

_Modifier to make a function callable only when the contract is not paused.

Requirements:

- The contract must not be paused._

### whenPaused

```solidity
modifier whenPaused()
```

_Modifier to make a function callable only when the contract is paused.

Requirements:

- The contract must be paused._

### _pause

```solidity
function _pause() internal virtual
```

_Triggers stopped state.

Requirements:

- The contract must not be paused._

### _unpause

```solidity
function _unpause() internal virtual
```

_Returns to normal state.

Requirements:

- The contract must be paused._

### __gap

```solidity
uint256[49] __gap
```

_This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps_

## IERC20Upgradeable

_Interface of the ERC20 standard as defined in the EIP._

### Transfer

```solidity
event Transfer(address from, address to, uint256 value)
```

_Emitted when &#x60;value&#x60; tokens are moved from one account (&#x60;from&#x60;) to
another (&#x60;to&#x60;).

Note that &#x60;value&#x60; may be zero._

### Approval

```solidity
event Approval(address owner, address spender, uint256 value)
```

_Emitted when the allowance of a &#x60;spender&#x60; for an &#x60;owner&#x60; is set by
a call to {approve}. &#x60;value&#x60; is the new allowance._

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_Returns the amount of tokens in existence._

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_Returns the amount of tokens owned by &#x60;account&#x60;._

### transfer

```solidity
function transfer(address to, uint256 amount) external returns (bool)
```

_Moves &#x60;amount&#x60; tokens from the caller&#x27;s account to &#x60;to&#x60;.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_Returns the remaining number of tokens that &#x60;spender&#x60; will be
allowed to spend on behalf of &#x60;owner&#x60; through {transferFrom}. This is
zero by default.

This value changes when {approve} or {transferFrom} are called._

### approve

```solidity
function approve(address spender, uint256 amount) external returns (bool)
```

_Sets &#x60;amount&#x60; as the allowance of &#x60;spender&#x60; over the caller&#x27;s tokens.

Returns a boolean value indicating whether the operation succeeded.

IMPORTANT: Beware that changing an allowance with this method brings the risk
that someone may use both the old and the new allowance by unfortunate
transaction ordering. One possible solution to mitigate this race
condition is to first reduce the spender&#x27;s allowance to 0 and set the
desired value afterwards:
https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729

Emits an {Approval} event._

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external returns (bool)
```

_Moves &#x60;amount&#x60; tokens from &#x60;from&#x60; to &#x60;to&#x60; using the
allowance mechanism. &#x60;amount&#x60; is then deducted from the caller&#x27;s
allowance.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

## AddressUpgradeable

_Collection of functions related to the address type_

### isContract

```solidity
function isContract(address account) internal view returns (bool)
```

_Returns true if &#x60;account&#x60; is a contract.

[IMPORTANT]
&#x3D;&#x3D;&#x3D;&#x3D;
It is unsafe to assume that an address for which this function returns
false is an externally-owned account (EOA) and not a contract.

Among others, &#x60;isContract&#x60; will return false for the following
types of addresses:

 - an externally-owned account
 - a contract in construction
 - an address where a contract will be created
 - an address where a contract lived, but was destroyed
&#x3D;&#x3D;&#x3D;&#x3D;

[IMPORTANT]
&#x3D;&#x3D;&#x3D;&#x3D;
You shouldn&#x27;t rely on &#x60;isContract&#x60; to protect against flash loan attacks!

Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
constructor.
&#x3D;&#x3D;&#x3D;&#x3D;_

### sendValue

```solidity
function sendValue(address payable recipient, uint256 amount) internal
```

_Replacement for Solidity&#x27;s &#x60;transfer&#x60;: sends &#x60;amount&#x60; wei to
&#x60;recipient&#x60;, forwarding all available gas and reverting on errors.

https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
of certain opcodes, possibly making contracts go over the 2300 gas limit
imposed by &#x60;transfer&#x60;, making them unable to receive funds via
&#x60;transfer&#x60;. {sendValue} removes this limitation.

https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].

IMPORTANT: because control is transferred to &#x60;recipient&#x60;, care must be
taken to not create reentrancy vulnerabilities. Consider using
{ReentrancyGuard} or the
https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]._

### functionCall

```solidity
function functionCall(address target, bytes data) internal returns (bytes)
```

_Performs a Solidity function call using a low level &#x60;call&#x60;. A
plain &#x60;call&#x60; is an unsafe replacement for a function call: use this
function instead.

If &#x60;target&#x60; reverts with a revert reason, it is bubbled up by this
function (like regular Solidity function calls).

Returns the raw returned data. To convert to the expected return value,
use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight&#x3D;abi.decode#abi-encoding-and-decoding-functions[&#x60;abi.decode&#x60;].

Requirements:

- &#x60;target&#x60; must be a contract.
- calling &#x60;target&#x60; with &#x60;data&#x60; must not revert.

_Available since v3.1.__

### functionCall

```solidity
function functionCall(address target, bytes data, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;], but with
&#x60;errorMessage&#x60; as a fallback revert reason when &#x60;target&#x60; reverts.

_Available since v3.1.__

### functionCallWithValue

```solidity
function functionCallWithValue(address target, bytes data, uint256 value) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;],
but also transferring &#x60;value&#x60; wei to &#x60;target&#x60;.

Requirements:

- the calling contract must have an ETH balance of at least &#x60;value&#x60;.
- the called Solidity function must be &#x60;payable&#x60;.

_Available since v3.1.__

### functionCallWithValue

```solidity
function functionCallWithValue(address target, bytes data, uint256 value, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[&#x60;functionCallWithValue&#x60;], but
with &#x60;errorMessage&#x60; as a fallback revert reason when &#x60;target&#x60; reverts.

_Available since v3.1.__

### functionStaticCall

```solidity
function functionStaticCall(address target, bytes data) internal view returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;],
but performing a static call.

_Available since v3.3.__

### functionStaticCall

```solidity
function functionStaticCall(address target, bytes data, string errorMessage) internal view returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-string-}[&#x60;functionCall&#x60;],
but performing a static call.

_Available since v3.3.__

### verifyCallResult

```solidity
function verifyCallResult(bool success, bytes returndata, string errorMessage) internal pure returns (bytes)
```

_Tool to verifies that a low level call was successful, and revert if it wasn&#x27;t, either by bubbling the
revert reason using the provided one.

_Available since v4.3.__

## ContextUpgradeable

_Provides information about the current execution context, including the
sender of the transaction and its data. While these are generally available
via msg.sender and msg.data, they should not be accessed in such a direct
manner, since when dealing with meta-transactions the account sending and
paying for execution may not be the actual sender (as far as an application
is concerned).

This contract is only required for intermediate, library-like contracts._

### __Context_init

```solidity
function __Context_init() internal
```

### __Context_init_unchained

```solidity
function __Context_init_unchained() internal
```

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes)
```

### __gap

```solidity
uint256[50] __gap
```

_This empty reserved space is put in place to allow future versions to add new
variables without shifting down storage in the inheritance chain.
See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps_

## StorageSlotUpgradeable

_Library for reading and writing primitive types to specific storage slots.

Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.
This library helps with reading and writing to such slots without the need for inline assembly.

The functions in this library return Slot structs that contain a &#x60;value&#x60; member that can be used to read or write.

Example usage to set ERC1967 implementation slot:
&#x60;&#x60;&#x60;
contract ERC1967 {
    bytes32 internal constant _IMPLEMENTATION_SLOT &#x3D; 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;

    function _getImplementation() internal view returns (address) {
        return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;
    }

    function _setImplementation(address newImplementation) internal {
        require(Address.isContract(newImplementation), &quot;ERC1967: new implementation is not a contract&quot;);
        StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value &#x3D; newImplementation;
    }
}
&#x60;&#x60;&#x60;

_Available since v4.1 for &#x60;address&#x60;, &#x60;bool&#x60;, &#x60;bytes32&#x60;, and &#x60;uint256&#x60;.__

### AddressSlot

```solidity
struct AddressSlot {
  address value;
}
```

### BooleanSlot

```solidity
struct BooleanSlot {
  bool value;
}
```

### Bytes32Slot

```solidity
struct Bytes32Slot {
  bytes32 value;
}
```

### Uint256Slot

```solidity
struct Uint256Slot {
  uint256 value;
}
```

### getAddressSlot

```solidity
function getAddressSlot(bytes32 slot) internal pure returns (struct StorageSlotUpgradeable.AddressSlot r)
```

_Returns an &#x60;AddressSlot&#x60; with member &#x60;value&#x60; located at &#x60;slot&#x60;._

### getBooleanSlot

```solidity
function getBooleanSlot(bytes32 slot) internal pure returns (struct StorageSlotUpgradeable.BooleanSlot r)
```

_Returns an &#x60;BooleanSlot&#x60; with member &#x60;value&#x60; located at &#x60;slot&#x60;._

### getBytes32Slot

```solidity
function getBytes32Slot(bytes32 slot) internal pure returns (struct StorageSlotUpgradeable.Bytes32Slot r)
```

_Returns an &#x60;Bytes32Slot&#x60; with member &#x60;value&#x60; located at &#x60;slot&#x60;._

### getUint256Slot

```solidity
function getUint256Slot(bytes32 slot) internal pure returns (struct StorageSlotUpgradeable.Uint256Slot r)
```

_Returns an &#x60;Uint256Slot&#x60; with member &#x60;value&#x60; located at &#x60;slot&#x60;._

## EscrowMarket

### Order

```solidity
struct Order {
  address maker;
  address tokenToGive;
  address tokenToTake;
  uint256 amountToGive;
  uint256 amountToTake;
  uint256 filled;
  uint256 expireTime;
}
```

### CreateOrder

```solidity
event CreateOrder(uint256 id, address maker, address tokenToGive, address tokenToTake, uint256 amountToGive, uint256 amountToTake, uint256 expireTime)
```

### AcceptOrder

```solidity
event AcceptOrder(uint256 id, address from, uint256 amountToGive, uint256 amountToTake)
```

### CancelOrder

```solidity
event CancelOrder(uint256 id)
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

### createOrder

```solidity
function createOrder(address _tokenToGive, address _tokenToTake, uint256 _amountToGive, uint256 _amountToTake, uint256 _expireTime) external
```

### acceptOrder

```solidity
function acceptOrder(uint256 _id, uint256 _amountToAccept) external
```

### cancelOrder

```solidity
function cancelOrder(uint256 _id) external
```

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation) internal
```

_Function that should revert when &#x60;msg.sender&#x60; is not authorized to upgrade the contract. Called by
{upgradeTo} and {upgradeToAndCall}.

Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.

&#x60;&#x60;&#x60;solidity
function _authorizeUpgrade(address) internal override onlyOwner {}
&#x60;&#x60;&#x60;_

## DOTCFixedMarket

### constructor

```solidity
constructor() public
```

### initialize

```solidity
function initialize() public
```

### _authorizeUpgrade

```solidity
function _authorizeUpgrade(address newImplementation) internal
```

_Function that should revert when &#x60;msg.sender&#x60; is not authorized to upgrade the contract. Called by
{upgradeTo} and {upgradeToAndCall}.

Normally, this function will use an xref:access.adoc[access control] modifier such as {Ownable-onlyOwner}.

&#x60;&#x60;&#x60;solidity
function _authorizeUpgrade(address) internal override onlyOwner {}
&#x60;&#x60;&#x60;_

## SeriesNonceManager

### NonceIncreased

```solidity
event NonceIncreased(address maker, uint8 series, uint256 newNonce)
```

### nonce

```solidity
mapping(uint8 &#x3D;&gt; mapping(address &#x3D;&gt; uint256)) nonce
```

### increaseNonce

```solidity
function increaseNonce(uint8 series) external
```

Advances nonce by one

### advanceNonce

```solidity
function advanceNonce(uint8 series, uint8 amount) public
```

Advances nonce by specified amount

### nonceEquals

```solidity
function nonceEquals(uint8 series, address makerAddress, uint256 makerNonce) external view returns (bool)
```

Checks if &#x60;makerAddress&#x60; has specified &#x60;makerNonce&#x60; for &#x60;series&#x60;

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if &#x60;makerAddress&#x60; has specified nonce. Otherwise, false |

## AggregatorInterface

### latestAnswer

```solidity
function latestAnswer() external view returns (int256)
```

### latestTimestamp

```solidity
function latestTimestamp() external view returns (uint256)
```

### latestRound

```solidity
function latestRound() external view returns (uint256)
```

### getAnswer

```solidity
function getAnswer(uint256 roundId) external view returns (int256)
```

### getTimestamp

```solidity
function getTimestamp(uint256 roundId) external view returns (uint256)
```

### AnswerUpdated

```solidity
event AnswerUpdated(int256 current, uint256 roundId, uint256 updatedAt)
```

### NewRound

```solidity
event NewRound(uint256 roundId, address startedBy, uint256 startedAt)
```

## AggregatorV2V3Interface

## AggregatorV3Interface

### decimals

```solidity
function decimals() external view returns (uint8)
```

### description

```solidity
function description() external view returns (string)
```

### version

```solidity
function version() external view returns (uint256)
```

### getRoundData

```solidity
function getRoundData(uint80 _roundId) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

### latestRoundData

```solidity
function latestRoundData() external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

## Ownable

_Contract module which provides a basic access control mechanism, where
there is an account (an owner) that can be granted exclusive access to
specific functions.

By default, the owner account will be the one that deploys the contract. This
can later be changed with {transferOwnership}.

This module is used through inheritance. It will make available the modifier
&#x60;onlyOwner&#x60;, which can be applied to your functions to restrict their use to
the owner._

### _owner

```solidity
address _owner
```

### OwnershipTransferred

```solidity
event OwnershipTransferred(address previousOwner, address newOwner)
```

### constructor

```solidity
constructor() internal
```

_Initializes the contract setting the deployer as the initial owner._

### owner

```solidity
function owner() public view virtual returns (address)
```

_Returns the address of the current owner._

### onlyOwner

```solidity
modifier onlyOwner()
```

_Throws if called by any account other than the owner._

### renounceOwnership

```solidity
function renounceOwnership() public virtual
```

_Leaves the contract without owner. It will not be possible to call
&#x60;onlyOwner&#x60; functions anymore. Can only be called by the current owner.

NOTE: Renouncing ownership will leave the contract without an owner,
thereby removing any functionality that is only available to the owner._

### transferOwnership

```solidity
function transferOwnership(address newOwner) public virtual
```

_Transfers ownership of the contract to a new account (&#x60;newOwner&#x60;).
Can only be called by the current owner._

### _transferOwnership

```solidity
function _transferOwnership(address newOwner) internal virtual
```

_Transfers ownership of the contract to a new account (&#x60;newOwner&#x60;).
Internal function without access restriction._

## IERC1271

_Interface of the ERC1271 standard signature validation method for
contracts as defined in https://eips.ethereum.org/EIPS/eip-1271[ERC-1271].

_Available since v4.1.__

### isValidSignature

```solidity
function isValidSignature(bytes32 hash, bytes signature) external view returns (bytes4 magicValue)
```

_Should return whether the signature provided is valid for the provided data_

| Name | Type | Description |
| ---- | ---- | ----------- |
| hash | bytes32 | Hash of the data to be signed |
| signature | bytes | Signature byte array associated with _data |

## IERC1155

_Required interface of an ERC1155 compliant contract, as defined in the
https://eips.ethereum.org/EIPS/eip-1155[EIP].

_Available since v3.1.__

### TransferSingle

```solidity
event TransferSingle(address operator, address from, address to, uint256 id, uint256 value)
```

_Emitted when &#x60;value&#x60; tokens of token type &#x60;id&#x60; are transferred from &#x60;from&#x60; to &#x60;to&#x60; by &#x60;operator&#x60;._

### TransferBatch

```solidity
event TransferBatch(address operator, address from, address to, uint256[] ids, uint256[] values)
```

_Equivalent to multiple {TransferSingle} events, where &#x60;operator&#x60;, &#x60;from&#x60; and &#x60;to&#x60; are the same for all
transfers._

### ApprovalForAll

```solidity
event ApprovalForAll(address account, address operator, bool approved)
```

_Emitted when &#x60;account&#x60; grants or revokes permission to &#x60;operator&#x60; to transfer their tokens, according to
&#x60;approved&#x60;._

### URI

```solidity
event URI(string value, uint256 id)
```

_Emitted when the URI for token type &#x60;id&#x60; changes to &#x60;value&#x60;, if it is a non-programmatic URI.

If an {URI} event was emitted for &#x60;id&#x60;, the standard
https://eips.ethereum.org/EIPS/eip-1155#metadata-extensions[guarantees] that &#x60;value&#x60; will equal the value
returned by {IERC1155MetadataURI-uri}._

### balanceOf

```solidity
function balanceOf(address account, uint256 id) external view returns (uint256)
```

_Returns the amount of tokens of token type &#x60;id&#x60; owned by &#x60;account&#x60;.

Requirements:

- &#x60;account&#x60; cannot be the zero address._

### balanceOfBatch

```solidity
function balanceOfBatch(address[] accounts, uint256[] ids) external view returns (uint256[])
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {balanceOf}.

Requirements:

- &#x60;accounts&#x60; and &#x60;ids&#x60; must have the same length._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external
```

_Grants or revokes permission to &#x60;operator&#x60; to transfer the caller&#x27;s tokens, according to &#x60;approved&#x60;,

Emits an {ApprovalForAll} event.

Requirements:

- &#x60;operator&#x60; cannot be the caller._

### isApprovedForAll

```solidity
function isApprovedForAll(address account, address operator) external view returns (bool)
```

_Returns true if &#x60;operator&#x60; is approved to transfer &#x60;&#x60;account&#x60;&#x60;&#x27;s tokens.

See {setApprovalForAll}._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) external
```

_Transfers &#x60;amount&#x60; tokens of token type &#x60;id&#x60; from &#x60;from&#x60; to &#x60;to&#x60;.

Emits a {TransferSingle} event.

Requirements:

- &#x60;to&#x60; cannot be the zero address.
- If the caller is not &#x60;from&#x60;, it must be have been approved to spend &#x60;&#x60;from&#x60;&#x60;&#x27;s tokens via {setApprovalForAll}.
- &#x60;from&#x60; must have a balance of tokens of type &#x60;id&#x60; of at least &#x60;amount&#x60;.
- If &#x60;to&#x60; refers to a smart contract, it must implement {IERC1155Receiver-onERC1155Received} and return the
acceptance magic value._

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) external
```

_xref:ROOT:erc1155.adoc#batch-operations[Batched] version of {safeTransferFrom}.

Emits a {TransferBatch} event.

Requirements:

- &#x60;ids&#x60; and &#x60;amounts&#x60; must have the same length.
- If &#x60;to&#x60; refers to a smart contract, it must implement {IERC1155Receiver-onERC1155BatchReceived} and return the
acceptance magic value._

## ERC20

_Implementation of the {IERC20} interface.

This implementation is agnostic to the way tokens are created. This means
that a supply mechanism has to be added in a derived contract using {_mint}.
For a generic mechanism see {ERC20PresetMinterPauser}.

TIP: For a detailed writeup see our guide
https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
to implement supply mechanisms].

We have followed general OpenZeppelin Contracts guidelines: functions revert
instead returning &#x60;false&#x60; on failure. This behavior is nonetheless
conventional and does not conflict with the expectations of ERC20
applications.

Additionally, an {Approval} event is emitted on calls to {transferFrom}.
This allows applications to reconstruct the allowance for all accounts just
by listening to said events. Other implementations of the EIP may not emit
these events, as it isn&#x27;t required by the specification.

Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
functions have been added to mitigate the well-known issues around setting
allowances. See {IERC20-approve}._

### _balances

```solidity
mapping(address &#x3D;&gt; uint256) _balances
```

### _allowances

```solidity
mapping(address &#x3D;&gt; mapping(address &#x3D;&gt; uint256)) _allowances
```

### _totalSupply

```solidity
uint256 _totalSupply
```

### _name

```solidity
string _name
```

### _symbol

```solidity
string _symbol
```

### constructor

```solidity
constructor(string name_, string symbol_) public
```

_Sets the values for {name} and {symbol}.

The default value of {decimals} is 18. To select a different value for
{decimals} you should overload it.

All two of these values are immutable: they can only be set once during
construction._

### name

```solidity
function name() public view virtual returns (string)
```

_Returns the name of the token._

### symbol

```solidity
function symbol() public view virtual returns (string)
```

_Returns the symbol of the token, usually a shorter version of the
name._

### decimals

```solidity
function decimals() public view virtual returns (uint8)
```

_Returns the number of decimals used to get its user representation.
For example, if &#x60;decimals&#x60; equals &#x60;2&#x60;, a balance of &#x60;505&#x60; tokens should
be displayed to a user as &#x60;5.05&#x60; (&#x60;505 / 10 ** 2&#x60;).

Tokens usually opt for a value of 18, imitating the relationship between
Ether and Wei. This is the value {ERC20} uses, unless this function is
overridden;

NOTE: This information is only used for _display_ purposes: it in
no way affects any of the arithmetic of the contract, including
{IERC20-balanceOf} and {IERC20-transfer}._

### totalSupply

```solidity
function totalSupply() public view virtual returns (uint256)
```

_See {IERC20-totalSupply}._

### balanceOf

```solidity
function balanceOf(address account) public view virtual returns (uint256)
```

_See {IERC20-balanceOf}._

### transfer

```solidity
function transfer(address to, uint256 amount) public virtual returns (bool)
```

_See {IERC20-transfer}.

Requirements:

- &#x60;to&#x60; cannot be the zero address.
- the caller must have a balance of at least &#x60;amount&#x60;._

### allowance

```solidity
function allowance(address owner, address spender) public view virtual returns (uint256)
```

_See {IERC20-allowance}._

### approve

```solidity
function approve(address spender, uint256 amount) public virtual returns (bool)
```

_See {IERC20-approve}.

NOTE: If &#x60;amount&#x60; is the maximum &#x60;uint256&#x60;, the allowance is not updated on
&#x60;transferFrom&#x60;. This is semantically equivalent to an infinite approval.

Requirements:

- &#x60;spender&#x60; cannot be the zero address._

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) public virtual returns (bool)
```

_See {IERC20-transferFrom}.

Emits an {Approval} event indicating the updated allowance. This is not
required by the EIP. See the note at the beginning of {ERC20}.

NOTE: Does not update the allowance if the current allowance
is the maximum &#x60;uint256&#x60;.

Requirements:

- &#x60;from&#x60; and &#x60;to&#x60; cannot be the zero address.
- &#x60;from&#x60; must have a balance of at least &#x60;amount&#x60;.
- the caller must have allowance for &#x60;&#x60;from&#x60;&#x60;&#x27;s tokens of at least
&#x60;amount&#x60;._

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool)
```

_Atomically increases the allowance granted to &#x60;spender&#x60; by the caller.

This is an alternative to {approve} that can be used as a mitigation for
problems described in {IERC20-approve}.

Emits an {Approval} event indicating the updated allowance.

Requirements:

- &#x60;spender&#x60; cannot be the zero address._

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool)
```

_Atomically decreases the allowance granted to &#x60;spender&#x60; by the caller.

This is an alternative to {approve} that can be used as a mitigation for
problems described in {IERC20-approve}.

Emits an {Approval} event indicating the updated allowance.

Requirements:

- &#x60;spender&#x60; cannot be the zero address.
- &#x60;spender&#x60; must have allowance for the caller of at least
&#x60;subtractedValue&#x60;._

### _transfer

```solidity
function _transfer(address from, address to, uint256 amount) internal virtual
```

_Moves &#x60;amount&#x60; of tokens from &#x60;sender&#x60; to &#x60;recipient&#x60;.

This internal function is equivalent to {transfer}, and can be used to
e.g. implement automatic token fees, slashing mechanisms, etc.

Emits a {Transfer} event.

Requirements:

- &#x60;from&#x60; cannot be the zero address.
- &#x60;to&#x60; cannot be the zero address.
- &#x60;from&#x60; must have a balance of at least &#x60;amount&#x60;._

### _mint

```solidity
function _mint(address account, uint256 amount) internal virtual
```

_Creates &#x60;amount&#x60; tokens and assigns them to &#x60;account&#x60;, increasing
the total supply.

Emits a {Transfer} event with &#x60;from&#x60; set to the zero address.

Requirements:

- &#x60;account&#x60; cannot be the zero address._

### _burn

```solidity
function _burn(address account, uint256 amount) internal virtual
```

_Destroys &#x60;amount&#x60; tokens from &#x60;account&#x60;, reducing the
total supply.

Emits a {Transfer} event with &#x60;to&#x60; set to the zero address.

Requirements:

- &#x60;account&#x60; cannot be the zero address.
- &#x60;account&#x60; must have at least &#x60;amount&#x60; tokens._

### _approve

```solidity
function _approve(address owner, address spender, uint256 amount) internal virtual
```

_Sets &#x60;amount&#x60; as the allowance of &#x60;spender&#x60; over the &#x60;owner&#x60; s tokens.

This internal function is equivalent to &#x60;approve&#x60;, and can be used to
e.g. set automatic allowances for certain subsystems, etc.

Emits an {Approval} event.

Requirements:

- &#x60;owner&#x60; cannot be the zero address.
- &#x60;spender&#x60; cannot be the zero address._

### _spendAllowance

```solidity
function _spendAllowance(address owner, address spender, uint256 amount) internal virtual
```

_Updates &#x60;owner&#x60; s allowance for &#x60;spender&#x60; based on spent &#x60;amount&#x60;.

Does not update the allowance amount in case of infinite allowance.
Revert if not enough allowance is available.

Might emit an {Approval} event._

### _beforeTokenTransfer

```solidity
function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual
```

_Hook that is called before any transfer of tokens. This includes
minting and burning.

Calling conditions:

- when &#x60;from&#x60; and &#x60;to&#x60; are both non-zero, &#x60;amount&#x60; of &#x60;&#x60;from&#x60;&#x60;&#x27;s tokens
will be transferred to &#x60;to&#x60;.
- when &#x60;from&#x60; is zero, &#x60;amount&#x60; tokens will be minted for &#x60;to&#x60;.
- when &#x60;to&#x60; is zero, &#x60;amount&#x60; of &#x60;&#x60;from&#x60;&#x60;&#x27;s tokens will be burned.
- &#x60;from&#x60; and &#x60;to&#x60; are never both zero.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

### _afterTokenTransfer

```solidity
function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual
```

_Hook that is called after any transfer of tokens. This includes
minting and burning.

Calling conditions:

- when &#x60;from&#x60; and &#x60;to&#x60; are both non-zero, &#x60;amount&#x60; of &#x60;&#x60;from&#x60;&#x60;&#x27;s tokens
has been transferred to &#x60;to&#x60;.
- when &#x60;from&#x60; is zero, &#x60;amount&#x60; tokens have been minted for &#x60;to&#x60;.
- when &#x60;to&#x60; is zero, &#x60;amount&#x60; of &#x60;&#x60;from&#x60;&#x60;&#x27;s tokens have been burned.
- &#x60;from&#x60; and &#x60;to&#x60; are never both zero.

To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks]._

## IERC20

_Interface of the ERC20 standard as defined in the EIP._

### Transfer

```solidity
event Transfer(address from, address to, uint256 value)
```

_Emitted when &#x60;value&#x60; tokens are moved from one account (&#x60;from&#x60;) to
another (&#x60;to&#x60;).

Note that &#x60;value&#x60; may be zero._

### Approval

```solidity
event Approval(address owner, address spender, uint256 value)
```

_Emitted when the allowance of a &#x60;spender&#x60; for an &#x60;owner&#x60; is set by
a call to {approve}. &#x60;value&#x60; is the new allowance._

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```

_Returns the amount of tokens in existence._

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```

_Returns the amount of tokens owned by &#x60;account&#x60;._

### transfer

```solidity
function transfer(address to, uint256 amount) external returns (bool)
```

_Moves &#x60;amount&#x60; tokens from the caller&#x27;s account to &#x60;to&#x60;.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```

_Returns the remaining number of tokens that &#x60;spender&#x60; will be
allowed to spend on behalf of &#x60;owner&#x60; through {transferFrom}. This is
zero by default.

This value changes when {approve} or {transferFrom} are called._

### approve

```solidity
function approve(address spender, uint256 amount) external returns (bool)
```

_Sets &#x60;amount&#x60; as the allowance of &#x60;spender&#x60; over the caller&#x27;s tokens.

Returns a boolean value indicating whether the operation succeeded.

IMPORTANT: Beware that changing an allowance with this method brings the risk
that someone may use both the old and the new allowance by unfortunate
transaction ordering. One possible solution to mitigate this race
condition is to first reduce the spender&#x27;s allowance to 0 and set the
desired value afterwards:
https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729

Emits an {Approval} event._

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external returns (bool)
```

_Moves &#x60;amount&#x60; tokens from &#x60;from&#x60; to &#x60;to&#x60; using the
allowance mechanism. &#x60;amount&#x60; is then deducted from the caller&#x27;s
allowance.

Returns a boolean value indicating whether the operation succeeded.

Emits a {Transfer} event._

## IERC20Metadata

_Interface for the optional metadata functions from the ERC20 standard.

_Available since v4.1.__

### name

```solidity
function name() external view returns (string)
```

_Returns the name of the token._

### symbol

```solidity
function symbol() external view returns (string)
```

_Returns the symbol of the token._

### decimals

```solidity
function decimals() external view returns (uint8)
```

_Returns the decimals places of the token._

## ERC20Permit

_Implementation of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in
https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].

Adds the {permit} method, which can be used to change an account&#x27;s ERC20 allowance (see {IERC20-allowance}) by
presenting a message signed by the account. By not relying on &#x60;{IERC20-approve}&#x60;, the token holder account doesn&#x27;t
need to send a transaction, and thus is not required to hold Ether at all.

_Available since v3.4.__

### _nonces

```solidity
mapping(address &#x3D;&gt; struct Counters.Counter) _nonces
```

### _PERMIT_TYPEHASH

```solidity
bytes32 _PERMIT_TYPEHASH
```

### _PERMIT_TYPEHASH_DEPRECATED_SLOT

```solidity
bytes32 _PERMIT_TYPEHASH_DEPRECATED_SLOT
```

_In previous versions &#x60;_PERMIT_TYPEHASH&#x60; was declared as &#x60;immutable&#x60;.
However, to ensure consistency with the upgradeable transpiler, we will continue
to reserve a slot._

### constructor

```solidity
constructor(string name) internal
```

_Initializes the {EIP712} domain separator using the &#x60;name&#x60; parameter, and setting &#x60;version&#x60; to &#x60;&quot;1&quot;&#x60;.

It&#x27;s a good idea to use the same &#x60;name&#x60; that is defined as the ERC20 token name._

### permit

```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public virtual
```

_See {IERC20Permit-permit}._

### nonces

```solidity
function nonces(address owner) public view virtual returns (uint256)
```

_See {IERC20Permit-nonces}._

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

_See {IERC20Permit-DOMAIN_SEPARATOR}._

### _useNonce

```solidity
function _useNonce(address owner) internal virtual returns (uint256 current)
```

_&quot;Consume a nonce&quot;: return the current value and increment.

_Available since v4.1.__

## IERC20Permit

_Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in
https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].

Adds the {permit} method, which can be used to change an account&#x27;s ERC20 allowance (see {IERC20-allowance}) by
presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn&#x27;t
need to send a transaction, and thus is not required to hold Ether at all._

### permit

```solidity
function permit(address owner, address spender, uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) external
```

_Sets &#x60;value&#x60; as the allowance of &#x60;spender&#x60; over &#x60;&#x60;owner&#x60;&#x60;&#x27;s tokens,
given &#x60;&#x60;owner&#x60;&#x60;&#x27;s signed approval.

IMPORTANT: The same issues {IERC20-approve} has related to transaction
ordering also apply here.

Emits an {Approval} event.

Requirements:

- &#x60;spender&#x60; cannot be the zero address.
- &#x60;deadline&#x60; must be a timestamp in the future.
- &#x60;v&#x60;, &#x60;r&#x60; and &#x60;s&#x60; must be a valid &#x60;secp256k1&#x60; signature from &#x60;owner&#x60;
over the EIP712-formatted function arguments.
- the signature must use &#x60;&#x60;owner&#x60;&#x60;&#x27;s current nonce (see {nonces}).

For more information on the signature format, see the
https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP
section]._

### nonces

```solidity
function nonces(address owner) external view returns (uint256)
```

_Returns the current nonce for &#x60;owner&#x60;. This value must be
included whenever a signature is generated for {permit}.

Every successful call to {permit} increases &#x60;&#x60;owner&#x60;&#x60;&#x27;s nonce by one. This
prevents a signature from being used multiple times._

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

_Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}._

## SafeERC20

_Wrappers around ERC20 operations that throw on failure (when the token
contract returns false). Tokens that return no value (and instead revert or
throw on failure) are also supported, non-reverting calls are assumed to be
successful.
To use this library you can add a &#x60;using SafeERC20 for IERC20;&#x60; statement to your contract,
which allows you to call the safe operations as &#x60;token.safeTransfer(...)&#x60;, etc._

### safeTransfer

```solidity
function safeTransfer(contract IERC20 token, address to, uint256 value) internal
```

### safeTransferFrom

```solidity
function safeTransferFrom(contract IERC20 token, address from, address to, uint256 value) internal
```

### safeApprove

```solidity
function safeApprove(contract IERC20 token, address spender, uint256 value) internal
```

_Deprecated. This function has issues similar to the ones found in
{IERC20-approve}, and its usage is discouraged.

Whenever possible, use {safeIncreaseAllowance} and
{safeDecreaseAllowance} instead._

### safeIncreaseAllowance

```solidity
function safeIncreaseAllowance(contract IERC20 token, address spender, uint256 value) internal
```

### safeDecreaseAllowance

```solidity
function safeDecreaseAllowance(contract IERC20 token, address spender, uint256 value) internal
```

### _callOptionalReturn

```solidity
function _callOptionalReturn(contract IERC20 token, bytes data) private
```

_Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
on the return value: the return value is optional (but if data is returned, it must not be false)._

| Name | Type | Description |
| ---- | ---- | ----------- |
| token | contract IERC20 | The token targeted by the call. |
| data | bytes | The call data (encoded using abi.encode or one of its variants). |

## IERC721

_Required interface of an ERC721 compliant contract._

### Transfer

```solidity
event Transfer(address from, address to, uint256 tokenId)
```

_Emitted when &#x60;tokenId&#x60; token is transferred from &#x60;from&#x60; to &#x60;to&#x60;._

### Approval

```solidity
event Approval(address owner, address approved, uint256 tokenId)
```

_Emitted when &#x60;owner&#x60; enables &#x60;approved&#x60; to manage the &#x60;tokenId&#x60; token._

### ApprovalForAll

```solidity
event ApprovalForAll(address owner, address operator, bool approved)
```

_Emitted when &#x60;owner&#x60; enables or disables (&#x60;approved&#x60;) &#x60;operator&#x60; to manage all of its assets._

### balanceOf

```solidity
function balanceOf(address owner) external view returns (uint256 balance)
```

_Returns the number of tokens in &#x60;&#x60;owner&#x60;&#x60;&#x27;s account._

### ownerOf

```solidity
function ownerOf(uint256 tokenId) external view returns (address owner)
```

_Returns the owner of the &#x60;tokenId&#x60; token.

Requirements:

- &#x60;tokenId&#x60; must exist._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId, bytes data) external
```

_Safely transfers &#x60;tokenId&#x60; token from &#x60;from&#x60; to &#x60;to&#x60;.

Requirements:

- &#x60;from&#x60; cannot be the zero address.
- &#x60;to&#x60; cannot be the zero address.
- &#x60;tokenId&#x60; token must exist and be owned by &#x60;from&#x60;.
- If the caller is not &#x60;from&#x60;, it must be approved to move this token by either {approve} or {setApprovalForAll}.
- If &#x60;to&#x60; refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.

Emits a {Transfer} event._

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 tokenId) external
```

_Safely transfers &#x60;tokenId&#x60; token from &#x60;from&#x60; to &#x60;to&#x60;, checking first that contract recipients
are aware of the ERC721 protocol to prevent tokens from being forever locked.

Requirements:

- &#x60;from&#x60; cannot be the zero address.
- &#x60;to&#x60; cannot be the zero address.
- &#x60;tokenId&#x60; token must exist and be owned by &#x60;from&#x60;.
- If the caller is not &#x60;from&#x60;, it must be have been allowed to move this token by either {approve} or {setApprovalForAll}.
- If &#x60;to&#x60; refers to a smart contract, it must implement {IERC721Receiver-onERC721Received}, which is called upon a safe transfer.

Emits a {Transfer} event._

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 tokenId) external
```

_Transfers &#x60;tokenId&#x60; token from &#x60;from&#x60; to &#x60;to&#x60;.

WARNING: Usage of this method is discouraged, use {safeTransferFrom} whenever possible.

Requirements:

- &#x60;from&#x60; cannot be the zero address.
- &#x60;to&#x60; cannot be the zero address.
- &#x60;tokenId&#x60; token must be owned by &#x60;from&#x60;.
- If the caller is not &#x60;from&#x60;, it must be approved to move this token by either {approve} or {setApprovalForAll}.

Emits a {Transfer} event._

### approve

```solidity
function approve(address to, uint256 tokenId) external
```

_Gives permission to &#x60;to&#x60; to transfer &#x60;tokenId&#x60; token to another account.
The approval is cleared when the token is transferred.

Only a single account can be approved at a time, so approving the zero address clears previous approvals.

Requirements:

- The caller must own the token or be an approved operator.
- &#x60;tokenId&#x60; must exist.

Emits an {Approval} event._

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool _approved) external
```

_Approve or remove &#x60;operator&#x60; as an operator for the caller.
Operators can call {transferFrom} or {safeTransferFrom} for any token owned by the caller.

Requirements:

- The &#x60;operator&#x60; cannot be the caller.

Emits an {ApprovalForAll} event._

### getApproved

```solidity
function getApproved(uint256 tokenId) external view returns (address operator)
```

_Returns the account approved for &#x60;tokenId&#x60; token.

Requirements:

- &#x60;tokenId&#x60; must exist._

### isApprovedForAll

```solidity
function isApprovedForAll(address owner, address operator) external view returns (bool)
```

_Returns if the &#x60;operator&#x60; is allowed to manage all of the assets of &#x60;owner&#x60;.

See {setApprovalForAll}_

## Address

_Collection of functions related to the address type_

### isContract

```solidity
function isContract(address account) internal view returns (bool)
```

_Returns true if &#x60;account&#x60; is a contract.

[IMPORTANT]
&#x3D;&#x3D;&#x3D;&#x3D;
It is unsafe to assume that an address for which this function returns
false is an externally-owned account (EOA) and not a contract.

Among others, &#x60;isContract&#x60; will return false for the following
types of addresses:

 - an externally-owned account
 - a contract in construction
 - an address where a contract will be created
 - an address where a contract lived, but was destroyed
&#x3D;&#x3D;&#x3D;&#x3D;

[IMPORTANT]
&#x3D;&#x3D;&#x3D;&#x3D;
You shouldn&#x27;t rely on &#x60;isContract&#x60; to protect against flash loan attacks!

Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets
like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract
constructor.
&#x3D;&#x3D;&#x3D;&#x3D;_

### sendValue

```solidity
function sendValue(address payable recipient, uint256 amount) internal
```

_Replacement for Solidity&#x27;s &#x60;transfer&#x60;: sends &#x60;amount&#x60; wei to
&#x60;recipient&#x60;, forwarding all available gas and reverting on errors.

https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
of certain opcodes, possibly making contracts go over the 2300 gas limit
imposed by &#x60;transfer&#x60;, making them unable to receive funds via
&#x60;transfer&#x60;. {sendValue} removes this limitation.

https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].

IMPORTANT: because control is transferred to &#x60;recipient&#x60;, care must be
taken to not create reentrancy vulnerabilities. Consider using
{ReentrancyGuard} or the
https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern]._

### functionCall

```solidity
function functionCall(address target, bytes data) internal returns (bytes)
```

_Performs a Solidity function call using a low level &#x60;call&#x60;. A
plain &#x60;call&#x60; is an unsafe replacement for a function call: use this
function instead.

If &#x60;target&#x60; reverts with a revert reason, it is bubbled up by this
function (like regular Solidity function calls).

Returns the raw returned data. To convert to the expected return value,
use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight&#x3D;abi.decode#abi-encoding-and-decoding-functions[&#x60;abi.decode&#x60;].

Requirements:

- &#x60;target&#x60; must be a contract.
- calling &#x60;target&#x60; with &#x60;data&#x60; must not revert.

_Available since v3.1.__

### functionCall

```solidity
function functionCall(address target, bytes data, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;], but with
&#x60;errorMessage&#x60; as a fallback revert reason when &#x60;target&#x60; reverts.

_Available since v3.1.__

### functionCallWithValue

```solidity
function functionCallWithValue(address target, bytes data, uint256 value) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;],
but also transferring &#x60;value&#x60; wei to &#x60;target&#x60;.

Requirements:

- the calling contract must have an ETH balance of at least &#x60;value&#x60;.
- the called Solidity function must be &#x60;payable&#x60;.

_Available since v3.1.__

### functionCallWithValue

```solidity
function functionCallWithValue(address target, bytes data, uint256 value, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[&#x60;functionCallWithValue&#x60;], but
with &#x60;errorMessage&#x60; as a fallback revert reason when &#x60;target&#x60; reverts.

_Available since v3.1.__

### functionStaticCall

```solidity
function functionStaticCall(address target, bytes data) internal view returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;],
but performing a static call.

_Available since v3.3.__

### functionStaticCall

```solidity
function functionStaticCall(address target, bytes data, string errorMessage) internal view returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-string-}[&#x60;functionCall&#x60;],
but performing a static call.

_Available since v3.3.__

### functionDelegateCall

```solidity
function functionDelegateCall(address target, bytes data) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-}[&#x60;functionCall&#x60;],
but performing a delegate call.

_Available since v3.4.__

### functionDelegateCall

```solidity
function functionDelegateCall(address target, bytes data, string errorMessage) internal returns (bytes)
```

_Same as {xref-Address-functionCall-address-bytes-string-}[&#x60;functionCall&#x60;],
but performing a delegate call.

_Available since v3.4.__

### verifyCallResult

```solidity
function verifyCallResult(bool success, bytes returndata, string errorMessage) internal pure returns (bytes)
```

_Tool to verifies that a low level call was successful, and revert if it wasn&#x27;t, either by bubbling the
revert reason using the provided one.

_Available since v4.3.__

## Context

_Provides information about the current execution context, including the
sender of the transaction and its data. While these are generally available
via msg.sender and msg.data, they should not be accessed in such a direct
manner, since when dealing with meta-transactions the account sending and
paying for execution may not be the actual sender (as far as an application
is concerned).

This contract is only required for intermediate, library-like contracts._

### _msgSender

```solidity
function _msgSender() internal view virtual returns (address)
```

### _msgData

```solidity
function _msgData() internal view virtual returns (bytes)
```

## Counters

_Provides counters that can only be incremented, decremented or reset. This can be used e.g. to track the number
of elements in a mapping, issuing ERC721 ids, or counting request ids.

Include with &#x60;using Counters for Counters.Counter;&#x60;_

### Counter

```solidity
struct Counter {
  uint256 _value;
}
```

### current

```solidity
function current(struct Counters.Counter counter) internal view returns (uint256)
```

### increment

```solidity
function increment(struct Counters.Counter counter) internal
```

### decrement

```solidity
function decrement(struct Counters.Counter counter) internal
```

### reset

```solidity
function reset(struct Counters.Counter counter) internal
```

## Strings

_String operations._

### _HEX_SYMBOLS

```solidity
bytes16 _HEX_SYMBOLS
```

### toString

```solidity
function toString(uint256 value) internal pure returns (string)
```

_Converts a &#x60;uint256&#x60; to its ASCII &#x60;string&#x60; decimal representation._

### toHexString

```solidity
function toHexString(uint256 value) internal pure returns (string)
```

_Converts a &#x60;uint256&#x60; to its ASCII &#x60;string&#x60; hexadecimal representation._

### toHexString

```solidity
function toHexString(uint256 value, uint256 length) internal pure returns (string)
```

_Converts a &#x60;uint256&#x60; to its ASCII &#x60;string&#x60; hexadecimal representation with fixed length._

## ECDSA

_Elliptic Curve Digital Signature Algorithm (ECDSA) operations.

These functions can be used to verify that a message was signed by the holder
of the private keys of a given address._

### RecoverError

```solidity
enum RecoverError {
  NoError,
  InvalidSignature,
  InvalidSignatureLength,
  InvalidSignatureS,
  InvalidSignatureV
}
```

### _throwError

```solidity
function _throwError(enum ECDSA.RecoverError error) private pure
```

### tryRecover

```solidity
function tryRecover(bytes32 hash, bytes signature) internal pure returns (address, enum ECDSA.RecoverError)
```

_Returns the address that signed a hashed message (&#x60;hash&#x60;) with
&#x60;signature&#x60; or error string. This address can then be used for verification purposes.

The &#x60;ecrecover&#x60; EVM opcode allows for malleable (non-unique) signatures:
this function rejects them by requiring the &#x60;s&#x60; value to be in the lower
half order, and the &#x60;v&#x60; value to be either 27 or 28.

IMPORTANT: &#x60;hash&#x60; _must_ be the result of a hash operation for the
verification to be secure: it is possible to craft signatures that
recover to arbitrary addresses for non-hashed data. A safe way to ensure
this is by receiving a hash of the original message (which may otherwise
be too long), and then calling {toEthSignedMessageHash} on it.

Documentation for signature generation:
- with https://web3js.readthedocs.io/en/v1.3.4/web3-eth-accounts.html#sign[Web3.js]
- with https://docs.ethers.io/v5/api/signer/#Signer-signMessage[ethers]

_Available since v4.3.__

### recover

```solidity
function recover(bytes32 hash, bytes signature) internal pure returns (address)
```

_Returns the address that signed a hashed message (&#x60;hash&#x60;) with
&#x60;signature&#x60;. This address can then be used for verification purposes.

The &#x60;ecrecover&#x60; EVM opcode allows for malleable (non-unique) signatures:
this function rejects them by requiring the &#x60;s&#x60; value to be in the lower
half order, and the &#x60;v&#x60; value to be either 27 or 28.

IMPORTANT: &#x60;hash&#x60; _must_ be the result of a hash operation for the
verification to be secure: it is possible to craft signatures that
recover to arbitrary addresses for non-hashed data. A safe way to ensure
this is by receiving a hash of the original message (which may otherwise
be too long), and then calling {toEthSignedMessageHash} on it._

### tryRecover

```solidity
function tryRecover(bytes32 hash, bytes32 r, bytes32 vs) internal pure returns (address, enum ECDSA.RecoverError)
```

_Overload of {ECDSA-tryRecover} that receives the &#x60;r&#x60; and &#x60;vs&#x60; short-signature fields separately.

See https://eips.ethereum.org/EIPS/eip-2098[EIP-2098 short signatures]

_Available since v4.3.__

### recover

```solidity
function recover(bytes32 hash, bytes32 r, bytes32 vs) internal pure returns (address)
```

_Overload of {ECDSA-recover} that receives the &#x60;r and &#x60;vs&#x60; short-signature fields separately.

_Available since v4.2.__

### tryRecover

```solidity
function tryRecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) internal pure returns (address, enum ECDSA.RecoverError)
```

_Overload of {ECDSA-tryRecover} that receives the &#x60;v&#x60;,
&#x60;r&#x60; and &#x60;s&#x60; signature fields separately.

_Available since v4.3.__

### recover

```solidity
function recover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) internal pure returns (address)
```

_Overload of {ECDSA-recover} that receives the &#x60;v&#x60;,
&#x60;r&#x60; and &#x60;s&#x60; signature fields separately.
/_

### toEthSignedMessageHash

```solidity
function toEthSignedMessageHash(bytes32 hash) internal pure returns (bytes32)
```

_Returns an Ethereum Signed Message, created from a &#x60;hash&#x60;. This
produces hash corresponding to the one signed with the
https://eth.wiki/json-rpc/API#eth_sign[&#x60;eth_sign&#x60;]
JSON-RPC method as part of EIP-191.

See {recover}.
/_

### toEthSignedMessageHash

```solidity
function toEthSignedMessageHash(bytes s) internal pure returns (bytes32)
```

_Returns an Ethereum Signed Message, created from &#x60;s&#x60;. This
produces hash corresponding to the one signed with the
https://eth.wiki/json-rpc/API#eth_sign[&#x60;eth_sign&#x60;]
JSON-RPC method as part of EIP-191.

See {recover}.
/_

### toTypedDataHash

```solidity
function toTypedDataHash(bytes32 domainSeparator, bytes32 structHash) internal pure returns (bytes32)
```

_Returns an Ethereum Signed Typed Data, created from a
&#x60;domainSeparator&#x60; and a &#x60;structHash&#x60;. This produces hash corresponding
to the one signed with the
https://eips.ethereum.org/EIPS/eip-712[&#x60;eth_signTypedData&#x60;]
JSON-RPC method as part of EIP-712.

See {recover}.
/_

## SignatureChecker

_Signature verification helper that can be used instead of &#x60;ECDSA.recover&#x60; to seamlessly support both ECDSA
signatures from externally owned accounts (EOAs) as well as ERC1271 signatures from smart contract wallets like
Argent and Gnosis Safe.

_Available since v4.1.__

### isValidSignatureNow

```solidity
function isValidSignatureNow(address signer, bytes32 hash, bytes signature) internal view returns (bool)
```

_Checks if a signature is valid for a given signer and data hash. If the signer is a smart contract, the
signature is validated against that smart contract using ERC1271, otherwise it&#x27;s validated using &#x60;ECDSA.recover&#x60;.

NOTE: Unlike ECDSA signatures, contract signatures are revocable, and the outcome of this function can thus
change through time. It could return true at block N and false at block N+1 (or the opposite)._

## EIP712

_https://eips.ethereum.org/EIPS/eip-712[EIP 712] is a standard for hashing and signing of typed structured data.

The encoding specified in the EIP is very generic, and such a generic implementation in Solidity is not feasible,
thus this contract does not implement the encoding itself. Protocols need to implement the type-specific encoding
they need in their contracts using a combination of &#x60;abi.encode&#x60; and &#x60;keccak256&#x60;.

This contract implements the EIP 712 domain separator ({_domainSeparatorV4}) that is used as part of the encoding
scheme, and the final step of the encoding to obtain the message digest that is then signed via ECDSA
({_hashTypedDataV4}).

The implementation of the domain separator was designed to be as efficient as possible while still properly updating
the chain id to protect against replay attacks on an eventual fork of the chain.

NOTE: This contract implements the version of the encoding known as &quot;v4&quot;, as implemented by the JSON RPC method
https://docs.metamask.io/guide/signing-data.html[&#x60;eth_signTypedDataV4&#x60; in MetaMask].

_Available since v3.4.__

### _CACHED_DOMAIN_SEPARATOR

```solidity
bytes32 _CACHED_DOMAIN_SEPARATOR
```

### _CACHED_CHAIN_ID

```solidity
uint256 _CACHED_CHAIN_ID
```

### _CACHED_THIS

```solidity
address _CACHED_THIS
```

### _HASHED_NAME

```solidity
bytes32 _HASHED_NAME
```

### _HASHED_VERSION

```solidity
bytes32 _HASHED_VERSION
```

### _TYPE_HASH

```solidity
bytes32 _TYPE_HASH
```

### constructor

```solidity
constructor(string name, string version) internal
```

_Initializes the domain separator and parameter caches.

The meaning of &#x60;name&#x60; and &#x60;version&#x60; is specified in
https://eips.ethereum.org/EIPS/eip-712#definition-of-domainseparator[EIP 712]:

- &#x60;name&#x60;: the user readable name of the signing domain, i.e. the name of the DApp or the protocol.
- &#x60;version&#x60;: the current major version of the signing domain.

NOTE: These parameters cannot be changed except through a xref:learn::upgrading-smart-contracts.adoc[smart
contract upgrade]._

### _domainSeparatorV4

```solidity
function _domainSeparatorV4() internal view returns (bytes32)
```

_Returns the domain separator for the current chain._

### _buildDomainSeparator

```solidity
function _buildDomainSeparator(bytes32 typeHash, bytes32 nameHash, bytes32 versionHash) private view returns (bytes32)
```

### _hashTypedDataV4

```solidity
function _hashTypedDataV4(bytes32 structHash) internal view virtual returns (bytes32)
```

_Given an already https://eips.ethereum.org/EIPS/eip-712#definition-of-hashstruct[hashed struct], this
function returns the hash of the fully encoded EIP712 message for this domain.

This hash can be used together with {ECDSA-recover} to obtain the signer of a message. For example:

&#x60;&#x60;&#x60;solidity
bytes32 digest &#x3D; _hashTypedDataV4(keccak256(abi.encode(
    keccak256(&quot;Mail(address to,string contents)&quot;),
    mailTo,
    keccak256(bytes(mailContents))
)));
address signer &#x3D; ECDSA.recover(digest, signature);
&#x60;&#x60;&#x60;_

## IERC165

_Interface of the ERC165 standard, as defined in the
https://eips.ethereum.org/EIPS/eip-165[EIP].

Implementers can declare support of contract interfaces, which can then be
queried by others ({ERC165Checker}).

For an implementation, see {ERC165}._

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```

_Returns true if this contract implements the interface defined by
&#x60;interfaceId&#x60;. See the corresponding
https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]
to learn more about how these ids are created.

This function call must use less than 30 000 gas._

## SafeCast

_Wrappers over Solidity&#x27;s uintXX/intXX casting operators with added overflow
checks.

Downcasting from uint256/int256 in Solidity does not revert on overflow. This can
easily result in undesired exploitation or bugs, since developers usually
assume that overflows raise errors. &#x60;SafeCast&#x60; restores this intuition by
reverting the transaction when such an operation overflows.

Using this library instead of the unchecked operations eliminates an entire
class of bugs, so it&#x27;s recommended to use it always.

Can be combined with {SafeMath} and {SignedSafeMath} to extend it to smaller types, by performing
all math on &#x60;uint256&#x60; and &#x60;int256&#x60; and then downcasting._

### toUint224

```solidity
function toUint224(uint256 value) internal pure returns (uint224)
```

_Returns the downcasted uint224 from uint256, reverting on
overflow (when the input is greater than largest uint224).

Counterpart to Solidity&#x27;s &#x60;uint224&#x60; operator.

Requirements:

- input must fit into 224 bits_

### toUint128

```solidity
function toUint128(uint256 value) internal pure returns (uint128)
```

_Returns the downcasted uint128 from uint256, reverting on
overflow (when the input is greater than largest uint128).

Counterpart to Solidity&#x27;s &#x60;uint128&#x60; operator.

Requirements:

- input must fit into 128 bits_

### toUint96

```solidity
function toUint96(uint256 value) internal pure returns (uint96)
```

_Returns the downcasted uint96 from uint256, reverting on
overflow (when the input is greater than largest uint96).

Counterpart to Solidity&#x27;s &#x60;uint96&#x60; operator.

Requirements:

- input must fit into 96 bits_

### toUint64

```solidity
function toUint64(uint256 value) internal pure returns (uint64)
```

_Returns the downcasted uint64 from uint256, reverting on
overflow (when the input is greater than largest uint64).

Counterpart to Solidity&#x27;s &#x60;uint64&#x60; operator.

Requirements:

- input must fit into 64 bits_

### toUint32

```solidity
function toUint32(uint256 value) internal pure returns (uint32)
```

_Returns the downcasted uint32 from uint256, reverting on
overflow (when the input is greater than largest uint32).

Counterpart to Solidity&#x27;s &#x60;uint32&#x60; operator.

Requirements:

- input must fit into 32 bits_

### toUint16

```solidity
function toUint16(uint256 value) internal pure returns (uint16)
```

_Returns the downcasted uint16 from uint256, reverting on
overflow (when the input is greater than largest uint16).

Counterpart to Solidity&#x27;s &#x60;uint16&#x60; operator.

Requirements:

- input must fit into 16 bits_

### toUint8

```solidity
function toUint8(uint256 value) internal pure returns (uint8)
```

_Returns the downcasted uint8 from uint256, reverting on
overflow (when the input is greater than largest uint8).

Counterpart to Solidity&#x27;s &#x60;uint8&#x60; operator.

Requirements:

- input must fit into 8 bits._

### toUint256

```solidity
function toUint256(int256 value) internal pure returns (uint256)
```

_Converts a signed int256 into an unsigned uint256.

Requirements:

- input must be greater than or equal to 0._

### toInt128

```solidity
function toInt128(int256 value) internal pure returns (int128)
```

_Returns the downcasted int128 from int256, reverting on
overflow (when the input is less than smallest int128 or
greater than largest int128).

Counterpart to Solidity&#x27;s &#x60;int128&#x60; operator.

Requirements:

- input must fit into 128 bits

_Available since v3.1.__

### toInt64

```solidity
function toInt64(int256 value) internal pure returns (int64)
```

_Returns the downcasted int64 from int256, reverting on
overflow (when the input is less than smallest int64 or
greater than largest int64).

Counterpart to Solidity&#x27;s &#x60;int64&#x60; operator.

Requirements:

- input must fit into 64 bits

_Available since v3.1.__

### toInt32

```solidity
function toInt32(int256 value) internal pure returns (int32)
```

_Returns the downcasted int32 from int256, reverting on
overflow (when the input is less than smallest int32 or
greater than largest int32).

Counterpart to Solidity&#x27;s &#x60;int32&#x60; operator.

Requirements:

- input must fit into 32 bits

_Available since v3.1.__

### toInt16

```solidity
function toInt16(int256 value) internal pure returns (int16)
```

_Returns the downcasted int16 from int256, reverting on
overflow (when the input is less than smallest int16 or
greater than largest int16).

Counterpart to Solidity&#x27;s &#x60;int16&#x60; operator.

Requirements:

- input must fit into 16 bits

_Available since v3.1.__

### toInt8

```solidity
function toInt8(int256 value) internal pure returns (int8)
```

_Returns the downcasted int8 from int256, reverting on
overflow (when the input is less than smallest int8 or
greater than largest int8).

Counterpart to Solidity&#x27;s &#x60;int8&#x60; operator.

Requirements:

- input must fit into 8 bits.

_Available since v3.1.__

### toInt256

```solidity
function toInt256(uint256 value) internal pure returns (int256)
```

_Converts an unsigned uint256 into a signed int256.

Requirements:

- input must be less than or equal to maxInt256._

## MockToken

### constructor

```solidity
constructor() public
```

### mint

```solidity
function mint(address to, uint256 amount) public
```

## LimitOrderProtocol

### DOMAIN_SEPARATOR

```solidity
function DOMAIN_SEPARATOR() external view returns (bytes32)
```

## OrderMixin

### OrderFilled

```solidity
event OrderFilled(address maker, bytes32 orderHash, uint256 remaining)
```

Emitted every time order gets filled, including partial fills

### OrderCanceled

```solidity
event OrderCanceled(address maker, bytes32 orderHash, uint256 remainingRaw)
```

Emitted when order gets cancelled

### StaticOrder

```solidity
struct StaticOrder {
  uint256 salt;
  address makerAsset;
  address takerAsset;
  address maker;
  address receiver;
  address allowedSender;
  uint256 makingAmount;
  uint256 takingAmount;
}
```

### Order

```solidity
struct Order {
  uint256 salt;
  address makerAsset;
  address takerAsset;
  address maker;
  address receiver;
  address allowedSender;
  uint256 makingAmount;
  uint256 takingAmount;
  bytes makerAssetData;
  bytes takerAssetData;
  bytes getMakerAmount;
  bytes getTakerAmount;
  bytes predicate;
  bytes permit;
  bytes interaction;
}
```

### LIMIT_ORDER_TYPEHASH

```solidity
bytes32 LIMIT_ORDER_TYPEHASH
```

### _ORDER_DOES_NOT_EXIST

```solidity
uint256 _ORDER_DOES_NOT_EXIST
```

### _ORDER_FILLED

```solidity
uint256 _ORDER_FILLED
```

### _remaining

```solidity
mapping(bytes32 &#x3D;&gt; uint256) _remaining
```

Stores unfilled amounts for each order plus one.
Therefore 0 means order doesn&#x27;t exist and 1 means order was filled

### remaining

```solidity
function remaining(bytes32 orderHash) external view returns (uint256)
```

Returns unfilled amount for order. Throws if order does not exist

### remainingRaw

```solidity
function remainingRaw(bytes32 orderHash) external view returns (uint256)
```

Returns unfilled amount for order

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result Unfilled amount of order plus one if order exists. Otherwise 0 |

### remainingsRaw

```solidity
function remainingsRaw(bytes32[] orderHashes) external view returns (uint256[])
```

Same as &#x60;remainingRaw&#x60; but for multiple orders

### simulateCalls

```solidity
function simulateCalls(address[] targets, bytes[] data) external
```

Calls every target with corresponding data. Then reverts with CALL_RESULTS_0101011 where zeroes and ones
denote failure or success of the corresponding call

| Name | Type | Description |
| ---- | ---- | ----------- |
| targets | address[] | Array of addresses that will be called |
| data | bytes[] | Array of data that will be passed to each call |

### cancelOrder

```solidity
function cancelOrder(struct OrderMixin.Order order) external
```

Cancels order by setting remaining amount to zero

### fillOrder

```solidity
function fillOrder(struct OrderMixin.Order order, bytes signature, uint256 makingAmount, uint256 takingAmount, uint256 thresholdAmount) external returns (uint256, uint256)
```

Fills an order. If one doesn&#x27;t exist (first fill) it will be created using order.makerAssetData

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct OrderMixin.Order | Order quote to fill |
| signature | bytes | Signature to confirm quote ownership |
| makingAmount | uint256 | Making amount |
| takingAmount | uint256 | Taking amount |
| thresholdAmount | uint256 | Specifies maximum allowed takingAmount when takingAmount is zero, otherwise specifies minimum allowed makingAmount |

### fillOrderToWithPermit

```solidity
function fillOrderToWithPermit(struct OrderMixin.Order order, bytes signature, uint256 makingAmount, uint256 takingAmount, uint256 thresholdAmount, address target, bytes permit) external returns (uint256, uint256)
```

Same as &#x60;fillOrder&#x60; but calls permit first,
allowing to approve token spending and make a swap in one transaction.
Also allows to specify funds destination instead of &#x60;msg.sender&#x60;

_See tests for examples_

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct OrderMixin.Order | Order quote to fill |
| signature | bytes | Signature to confirm quote ownership |
| makingAmount | uint256 | Making amount |
| takingAmount | uint256 | Taking amount |
| thresholdAmount | uint256 | Specifies maximum allowed takingAmount when takingAmount is zero, otherwise specifies minimum allowed makingAmount |
| target | address | Address that will receive swap funds |
| permit | bytes | Should consist of abiencoded token address and encoded &#x60;IERC20Permit.permit&#x60; call. |

### fillOrderTo

```solidity
function fillOrderTo(struct OrderMixin.Order order, bytes signature, uint256 makingAmount, uint256 takingAmount, uint256 thresholdAmount, address target) public returns (uint256, uint256)
```

Same as &#x60;fillOrder&#x60; but allows to specify funds destination instead of &#x60;msg.sender&#x60;

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct OrderMixin.Order | Order quote to fill |
| signature | bytes | Signature to confirm quote ownership |
| makingAmount | uint256 | Making amount |
| takingAmount | uint256 | Taking amount |
| thresholdAmount | uint256 | Specifies maximum allowed takingAmount when takingAmount is zero, otherwise specifies minimum allowed makingAmount |
| target | address | Address that will receive swap funds |

### checkPredicate

```solidity
function checkPredicate(struct OrderMixin.Order order) public view returns (bool)
```

Checks order predicate

### hashOrder

```solidity
function hashOrder(struct OrderMixin.Order order) public view returns (bytes32)
```

### _makeCall

```solidity
function _makeCall(address asset, bytes assetData) private
```

### _callGetter

```solidity
function _callGetter(bytes getter, uint256 orderExpectedAmount, uint256 amount, uint256 orderResultAmount) private view returns (uint256)
```

## OrderRFQMixin

### OrderFilledRFQ

```solidity
event OrderFilledRFQ(bytes32 orderHash, uint256 makingAmount)
```

Emitted when RFQ gets filled

### OrderRFQ

```solidity
struct OrderRFQ {
  uint256 info;
  contract IERC20 makerAsset;
  contract IERC20 takerAsset;
  address maker;
  address allowedSender;
  uint256 makingAmount;
  uint256 takingAmount;
}
```

### LIMIT_ORDER_RFQ_TYPEHASH

```solidity
bytes32 LIMIT_ORDER_RFQ_TYPEHASH
```

### _invalidator

```solidity
mapping(address &#x3D;&gt; mapping(uint256 &#x3D;&gt; uint256)) _invalidator
```

### invalidatorForOrderRFQ

```solidity
function invalidatorForOrderRFQ(address maker, uint256 slot) external view returns (uint256)
```

Returns bitmask for double-spend invalidators based on lowest byte of order.info and filled quotes

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result Each bit represents whether corresponding was already invalidated |

### cancelOrderRFQ

```solidity
function cancelOrderRFQ(uint256 orderInfo) external
```

Cancels order&#x27;s quote

### fillOrderRFQ

```solidity
function fillOrderRFQ(struct OrderRFQMixin.OrderRFQ order, bytes signature, uint256 makingAmount, uint256 takingAmount) external returns (uint256, uint256)
```

Fills order&#x27;s quote, fully or partially (whichever is possible)

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct OrderRFQMixin.OrderRFQ | Order quote to fill |
| signature | bytes | Signature to confirm quote ownership |
| makingAmount | uint256 | Making amount |
| takingAmount | uint256 | Taking amount |

### fillOrderRFQToWithPermit

```solidity
function fillOrderRFQToWithPermit(struct OrderRFQMixin.OrderRFQ order, bytes signature, uint256 makingAmount, uint256 takingAmount, address target, bytes permit) external returns (uint256, uint256)
```

Fills Same as &#x60;fillOrderRFQ&#x60; but calls permit first,
allowing to approve token spending and make a swap in one transaction.
Also allows to specify funds destination instead of &#x60;msg.sender&#x60;

_See tests for examples_

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct OrderRFQMixin.OrderRFQ | Order quote to fill |
| signature | bytes | Signature to confirm quote ownership |
| makingAmount | uint256 | Making amount |
| takingAmount | uint256 | Taking amount |
| target | address | Address that will receive swap funds |
| permit | bytes | Should consist of abiencoded token address and encoded &#x60;IERC20Permit.permit&#x60; call. |

### fillOrderRFQTo

```solidity
function fillOrderRFQTo(struct OrderRFQMixin.OrderRFQ order, bytes signature, uint256 makingAmount, uint256 takingAmount, address target) public returns (uint256, uint256)
```

Same as &#x60;fillOrderRFQ&#x60; but allows to specify funds destination instead of &#x60;msg.sender&#x60;

| Name | Type | Description |
| ---- | ---- | ----------- |
| order | struct OrderRFQMixin.OrderRFQ | Order quote to fill |
| signature | bytes | Signature to confirm quote ownership |
| makingAmount | uint256 | Making amount |
| takingAmount | uint256 | Taking amount |
| target | address | Address that will receive swap funds |

### _invalidateOrder

```solidity
function _invalidateOrder(address maker, uint256 orderInfo) private
```

## WethUnwrapper

### receive

```solidity
receive() external payable
```

### notifyFillOrder

```solidity
function notifyFillOrder(address, address, address takerAsset, uint256, uint256 takingAmount, bytes interactiveData) external
```

## AmountCalculator

### getMakerAmount

```solidity
function getMakerAmount(uint256 orderMakerAmount, uint256 orderTakerAmount, uint256 swapTakerAmount) public pure returns (uint256)
```

Calculates maker amount

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result Floored maker amount |

### getTakerAmount

```solidity
function getTakerAmount(uint256 orderMakerAmount, uint256 orderTakerAmount, uint256 swapMakerAmount) public pure returns (uint256)
```

Calculates taker amount

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result Ceiled taker amount |

### arbitraryStaticCall

```solidity
function arbitraryStaticCall(address target, bytes data) external view returns (uint256)
```

Performs an arbitrary call to target with data

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result Bytes transmuted to uint256 |

## ChainlinkCalculator

### _SPREAD_DENOMINATOR

```solidity
uint256 _SPREAD_DENOMINATOR
```

### _INVERSE_MASK

```solidity
uint256 _INVERSE_MASK
```

### singlePrice

```solidity
function singlePrice(contract AggregatorV3Interface oracle, uint256 inverseAndSpread, uint256 amount) external view returns (uint256)
```

Calculates price of token relative to oracle unit (ETH or USD)

| Name | Type | Description |
| ---- | ---- | ----------- |
| oracle | contract AggregatorV3Interface |  |
| inverseAndSpread | uint256 | concatenated inverse flag and spread. Lowest 254 bits specify spread amount. Spread is scaled by 1e9, i.e. 101% &#x3D; 1.01e9, 99% &#x3D; 0.99e9. Highest bit is set when oracle price should be inverted, e.g. for DAI-ETH oracle, inverse&#x3D;false means that we request DAI price in ETH and inverse&#x3D;true means that we request ETH price in DAI |
| amount | uint256 |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Amount * spread * oracle price |

### doublePrice

```solidity
function doublePrice(contract AggregatorV3Interface oracle1, contract AggregatorV3Interface oracle2, uint256 spread, int256 decimalsScale, uint256 amount) external view returns (uint256)
```

Calculates price of token A relative to token B. Note that order is important

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | uint256 | Result Token A relative price times amount |

## ERC1155Proxy

### constructor

```solidity
constructor(address _immutableOwner) public
```

### func_301JL5R

```solidity
function func_301JL5R(address from, address to, uint256 amount, contract IERC1155 token, uint256 tokenId, bytes data) external
```

Proxy transfer method for &#x60;IERC1155.safeTransferFrom&#x60;. Selector must match &#x60;IERC20.transferFrom&#x60;

## ERC721Proxy

### constructor

```solidity
constructor(address _immutableOwner) public
```

### func_60iHVgK

```solidity
function func_60iHVgK(address from, address to, uint256, uint256 tokenId, contract IERC721 token) external
```

Proxy transfer method for &#x60;IERC721.transferFrom&#x60;. Selector must match &#x60;IERC20.transferFrom&#x60;.
Note that &#x60;amount&#x60; is unused for security reasons to prevent unintended ERC-721 token sale via partial fill

## ERC721ProxySafe

### constructor

```solidity
constructor(address _immutableOwner) public
```

### func_60iHVgK

```solidity
function func_60iHVgK(address from, address to, uint256, uint256 tokenId, contract IERC721 token) external
```

Proxy transfer method for &#x60;IERC721.transferFrom&#x60;. Selector must match &#x60;IERC20.transferFrom&#x60;.
Note that &#x60;amount&#x60; is unused for security reasons to prevent unintended ERC-721 token sale via partial fill

## ImmutableOwner

### immutableOwner

```solidity
address immutableOwner
```

### onlyImmutableOwner

```solidity
modifier onlyImmutableOwner()
```

### constructor

```solidity
constructor(address _immutableOwner) public
```

## NonceManager

### NonceIncreased

```solidity
event NonceIncreased(address maker, uint256 newNonce)
```

### nonce

```solidity
mapping(address &#x3D;&gt; uint256) nonce
```

### increaseNonce

```solidity
function increaseNonce() external
```

Advances nonce by one

### advanceNonce

```solidity
function advanceNonce(uint8 amount) public
```

Advances nonce by specified amount

### nonceEquals

```solidity
function nonceEquals(address makerAddress, uint256 makerNonce) external view returns (bool)
```

Checks if &#x60;makerAddress&#x60; has specified &#x60;makerNonce&#x60;

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if &#x60;makerAddress&#x60; has specified nonce. Otherwise, false |

## PredicateHelper

### or

```solidity
function or(address[] targets, bytes[] data) external view returns (bool)
```

Calls every target with corresponding data

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if call to any target returned True. Otherwise, false |

### and

```solidity
function and(address[] targets, bytes[] data) external view returns (bool)
```

Calls every target with corresponding data

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if calls to all targets returned True. Otherwise, false |

### eq

```solidity
function eq(uint256 value, address target, bytes data) external view returns (bool)
```

Calls target with specified data and tests if it&#x27;s equal to the value

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Value to test |
| target | address |  |
| data | bytes |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if call to target returns the same value as &#x60;value&#x60;. Otherwise, false |

### lt

```solidity
function lt(uint256 value, address target, bytes data) external view returns (bool)
```

Calls target with specified data and tests if it&#x27;s lower than value

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Value to test |
| target | address |  |
| data | bytes |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if call to target returns value which is lower than &#x60;value&#x60;. Otherwise, false |

### gt

```solidity
function gt(uint256 value, address target, bytes data) external view returns (bool)
```

Calls target with specified data and tests if it&#x27;s bigger than value

| Name | Type | Description |
| ---- | ---- | ----------- |
| value | uint256 | Value to test |
| target | address |  |
| data | bytes |  |

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if call to target returns value which is bigger than &#x60;value&#x60;. Otherwise, false |

### timestampBelow

```solidity
function timestampBelow(uint256 time) external view returns (bool)
```

Checks passed time against block timestamp

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | bool | Result True if current block timestamp is lower than &#x60;time&#x60;. Otherwise, false |

## WhitelistChecker

### TakerIsNotWhitelisted

```solidity
error TakerIsNotWhitelisted()
```

### whitelistRegistry

```solidity
contract IWhitelistRegistry whitelistRegistry
```

### constructor

```solidity
constructor(contract IWhitelistRegistry _whitelistRegistry) public
```

### notifyFillOrder

```solidity
function notifyFillOrder(address taker, address, address, uint256, uint256, bytes) external view
```

## IDaiLikePermit

### permit

```solidity
function permit(address holder, address spender, uint256 nonce, uint256 expiry, bool allowed, uint8 v, bytes32 r, bytes32 s) external
```

## IWhitelistRegistry

### status

```solidity
function status(address addr) external view returns (uint256)
```

## IWithdrawable

### withdraw

```solidity
function withdraw(uint256 wad) external
```

## InteractiveNotificationReceiver

### notifyFillOrder

```solidity
function notifyFillOrder(address taker, address makerAsset, address takerAsset, uint256 makingAmount, uint256 takingAmount, bytes interactiveData) external
```

Callback method that gets called after taker transferred funds to maker but before
the opposite transfer happened

## ArgumentsDecoder

### decodeUint256

```solidity
function decodeUint256(bytes data) internal pure returns (uint256)
```

### decodeBool

```solidity
function decodeBool(bytes data) internal pure returns (bool)
```

### decodeTargetAndCalldata

```solidity
function decodeTargetAndCalldata(bytes data) internal pure returns (address, bytes)
```

### decodeTargetAndData

```solidity
function decodeTargetAndData(bytes data) internal pure returns (address, bytes)
```

## Permitable

### _permit

```solidity
function _permit(address token, bytes permit) internal
```

### _permitMemory

```solidity
function _permitMemory(address token, bytes permit) internal
```

## RevertReasonParser

### _PANIC_SELECTOR

```solidity
bytes4 _PANIC_SELECTOR
```

### _ERROR_SELECTOR

```solidity
bytes4 _ERROR_SELECTOR
```

### parse

```solidity
function parse(bytes data, string prefix) internal pure returns (string)
```

### _toHex

```solidity
function _toHex(uint256 value) private pure returns (string)
```

### _toHex

```solidity
function _toHex(bytes data) private pure returns (string)
```

## AggregatorMock

### _answer

```solidity
int256 _answer
```

### constructor

```solidity
constructor(int256 answer) public
```

### decimals

```solidity
function decimals() external pure returns (uint8)
```

### description

```solidity
function description() external pure returns (string)
```

### version

```solidity
function version() external pure returns (uint256)
```

### getRoundData

```solidity
function getRoundData(uint80 _roundId) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

### latestRoundData

```solidity
function latestRoundData() public view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)
```

### latestAnswer

```solidity
function latestAnswer() public view returns (int256)
```

### latestTimestamp

```solidity
function latestTimestamp() public view returns (uint256)
```

### latestRound

```solidity
function latestRound() external pure returns (uint256)
```

### getAnswer

```solidity
function getAnswer(uint256 roundId) external view returns (int256)
```

### getTimestamp

```solidity
function getTimestamp(uint256 roundId) external view returns (uint256)
```

## TokenMock

### constructor

```solidity
constructor(string name, string symbol) public
```

### mint

```solidity
function mint(address account, uint256 amount) external
```

### burn

```solidity
function burn(address account, uint256 amount) external
```

### getChainId

```solidity
function getChainId() external view returns (uint256)
```

## WrappedTokenMock

### Deposit

```solidity
event Deposit(address dst, uint256 wad)
```

### Withdrawal

```solidity
event Withdrawal(address src, uint256 wad)
```

### constructor

```solidity
constructor(string name, string symbol) public
```

### receive

```solidity
receive() external payable
```

### mint

```solidity
function mint(address account, uint256 amount) external
```

### burn

```solidity
function burn(address account, uint256 amount) external
```

### getChainId

```solidity
function getChainId() external view returns (uint256)
```

### deposit

```solidity
function deposit() public payable
```

### withdraw

```solidity
function withdraw(uint256 wad) public
```

## ArgumentsDecoderTest

### fBool

```solidity
function fBool() external pure returns (bool)
```

### fUint

```solidity
function fUint() external pure returns (uint256)
```

### testDecodeBool

```solidity
function testDecodeBool() external view
```

### testDecodeUint

```solidity
function testDecodeUint() external view
```

## console

### CONSOLE_ADDRESS

```solidity
address CONSOLE_ADDRESS
```

### _sendLogPayload

```solidity
function _sendLogPayload(bytes payload) private view
```

### log

```solidity
function log() internal view
```

### logInt

```solidity
function logInt(int256 p0) internal view
```

### logUint

```solidity
function logUint(uint256 p0) internal view
```

### logString

```solidity
function logString(string p0) internal view
```

### logBool

```solidity
function logBool(bool p0) internal view
```

### logAddress

```solidity
function logAddress(address p0) internal view
```

### logBytes

```solidity
function logBytes(bytes p0) internal view
```

### logBytes1

```solidity
function logBytes1(bytes1 p0) internal view
```

### logBytes2

```solidity
function logBytes2(bytes2 p0) internal view
```

### logBytes3

```solidity
function logBytes3(bytes3 p0) internal view
```

### logBytes4

```solidity
function logBytes4(bytes4 p0) internal view
```

### logBytes5

```solidity
function logBytes5(bytes5 p0) internal view
```

### logBytes6

```solidity
function logBytes6(bytes6 p0) internal view
```

### logBytes7

```solidity
function logBytes7(bytes7 p0) internal view
```

### logBytes8

```solidity
function logBytes8(bytes8 p0) internal view
```

### logBytes9

```solidity
function logBytes9(bytes9 p0) internal view
```

### logBytes10

```solidity
function logBytes10(bytes10 p0) internal view
```

### logBytes11

```solidity
function logBytes11(bytes11 p0) internal view
```

### logBytes12

```solidity
function logBytes12(bytes12 p0) internal view
```

### logBytes13

```solidity
function logBytes13(bytes13 p0) internal view
```

### logBytes14

```solidity
function logBytes14(bytes14 p0) internal view
```

### logBytes15

```solidity
function logBytes15(bytes15 p0) internal view
```

### logBytes16

```solidity
function logBytes16(bytes16 p0) internal view
```

### logBytes17

```solidity
function logBytes17(bytes17 p0) internal view
```

### logBytes18

```solidity
function logBytes18(bytes18 p0) internal view
```

### logBytes19

```solidity
function logBytes19(bytes19 p0) internal view
```

### logBytes20

```solidity
function logBytes20(bytes20 p0) internal view
```

### logBytes21

```solidity
function logBytes21(bytes21 p0) internal view
```

### logBytes22

```solidity
function logBytes22(bytes22 p0) internal view
```

### logBytes23

```solidity
function logBytes23(bytes23 p0) internal view
```

### logBytes24

```solidity
function logBytes24(bytes24 p0) internal view
```

### logBytes25

```solidity
function logBytes25(bytes25 p0) internal view
```

### logBytes26

```solidity
function logBytes26(bytes26 p0) internal view
```

### logBytes27

```solidity
function logBytes27(bytes27 p0) internal view
```

### logBytes28

```solidity
function logBytes28(bytes28 p0) internal view
```

### logBytes29

```solidity
function logBytes29(bytes29 p0) internal view
```

### logBytes30

```solidity
function logBytes30(bytes30 p0) internal view
```

### logBytes31

```solidity
function logBytes31(bytes31 p0) internal view
```

### logBytes32

```solidity
function logBytes32(bytes32 p0) internal view
```

### log

```solidity
function log(uint256 p0) internal view
```

### log

```solidity
function log(string p0) internal view
```

### log

```solidity
function log(bool p0) internal view
```

### log

```solidity
function log(address p0) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1) internal view
```

### log

```solidity
function log(uint256 p0, string p1) internal view
```

### log

```solidity
function log(uint256 p0, bool p1) internal view
```

### log

```solidity
function log(uint256 p0, address p1) internal view
```

### log

```solidity
function log(string p0, uint256 p1) internal view
```

### log

```solidity
function log(string p0, string p1) internal view
```

### log

```solidity
function log(string p0, bool p1) internal view
```

### log

```solidity
function log(string p0, address p1) internal view
```

### log

```solidity
function log(bool p0, uint256 p1) internal view
```

### log

```solidity
function log(bool p0, string p1) internal view
```

### log

```solidity
function log(bool p0, bool p1) internal view
```

### log

```solidity
function log(bool p0, address p1) internal view
```

### log

```solidity
function log(address p0, uint256 p1) internal view
```

### log

```solidity
function log(address p0, string p1) internal view
```

### log

```solidity
function log(address p0, bool p1) internal view
```

### log

```solidity
function log(address p0, address p1) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, uint256 p2) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, string p2) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, bool p2) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, address p2) internal view
```

### log

```solidity
function log(uint256 p0, string p1, uint256 p2) internal view
```

### log

```solidity
function log(uint256 p0, string p1, string p2) internal view
```

### log

```solidity
function log(uint256 p0, string p1, bool p2) internal view
```

### log

```solidity
function log(uint256 p0, string p1, address p2) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, uint256 p2) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, string p2) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, bool p2) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, address p2) internal view
```

### log

```solidity
function log(uint256 p0, address p1, uint256 p2) internal view
```

### log

```solidity
function log(uint256 p0, address p1, string p2) internal view
```

### log

```solidity
function log(uint256 p0, address p1, bool p2) internal view
```

### log

```solidity
function log(uint256 p0, address p1, address p2) internal view
```

### log

```solidity
function log(string p0, uint256 p1, uint256 p2) internal view
```

### log

```solidity
function log(string p0, uint256 p1, string p2) internal view
```

### log

```solidity
function log(string p0, uint256 p1, bool p2) internal view
```

### log

```solidity
function log(string p0, uint256 p1, address p2) internal view
```

### log

```solidity
function log(string p0, string p1, uint256 p2) internal view
```

### log

```solidity
function log(string p0, string p1, string p2) internal view
```

### log

```solidity
function log(string p0, string p1, bool p2) internal view
```

### log

```solidity
function log(string p0, string p1, address p2) internal view
```

### log

```solidity
function log(string p0, bool p1, uint256 p2) internal view
```

### log

```solidity
function log(string p0, bool p1, string p2) internal view
```

### log

```solidity
function log(string p0, bool p1, bool p2) internal view
```

### log

```solidity
function log(string p0, bool p1, address p2) internal view
```

### log

```solidity
function log(string p0, address p1, uint256 p2) internal view
```

### log

```solidity
function log(string p0, address p1, string p2) internal view
```

### log

```solidity
function log(string p0, address p1, bool p2) internal view
```

### log

```solidity
function log(string p0, address p1, address p2) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, uint256 p2) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, string p2) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, bool p2) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, address p2) internal view
```

### log

```solidity
function log(bool p0, string p1, uint256 p2) internal view
```

### log

```solidity
function log(bool p0, string p1, string p2) internal view
```

### log

```solidity
function log(bool p0, string p1, bool p2) internal view
```

### log

```solidity
function log(bool p0, string p1, address p2) internal view
```

### log

```solidity
function log(bool p0, bool p1, uint256 p2) internal view
```

### log

```solidity
function log(bool p0, bool p1, string p2) internal view
```

### log

```solidity
function log(bool p0, bool p1, bool p2) internal view
```

### log

```solidity
function log(bool p0, bool p1, address p2) internal view
```

### log

```solidity
function log(bool p0, address p1, uint256 p2) internal view
```

### log

```solidity
function log(bool p0, address p1, string p2) internal view
```

### log

```solidity
function log(bool p0, address p1, bool p2) internal view
```

### log

```solidity
function log(bool p0, address p1, address p2) internal view
```

### log

```solidity
function log(address p0, uint256 p1, uint256 p2) internal view
```

### log

```solidity
function log(address p0, uint256 p1, string p2) internal view
```

### log

```solidity
function log(address p0, uint256 p1, bool p2) internal view
```

### log

```solidity
function log(address p0, uint256 p1, address p2) internal view
```

### log

```solidity
function log(address p0, string p1, uint256 p2) internal view
```

### log

```solidity
function log(address p0, string p1, string p2) internal view
```

### log

```solidity
function log(address p0, string p1, bool p2) internal view
```

### log

```solidity
function log(address p0, string p1, address p2) internal view
```

### log

```solidity
function log(address p0, bool p1, uint256 p2) internal view
```

### log

```solidity
function log(address p0, bool p1, string p2) internal view
```

### log

```solidity
function log(address p0, bool p1, bool p2) internal view
```

### log

```solidity
function log(address p0, bool p1, address p2) internal view
```

### log

```solidity
function log(address p0, address p1, uint256 p2) internal view
```

### log

```solidity
function log(address p0, address p1, string p2) internal view
```

### log

```solidity
function log(address p0, address p1, bool p2) internal view
```

### log

```solidity
function log(address p0, address p1, address p2) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, string p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, string p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, string p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, bool p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, bool p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, address p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, address p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, uint256 p1, address p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, string p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, string p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, string p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, bool p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, bool p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, address p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, address p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, string p1, address p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, string p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, string p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, string p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, bool p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, bool p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, address p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, address p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, bool p1, address p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, string p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, string p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, string p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, bool p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, bool p2, address p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, address p2, string p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, address p2, bool p3) internal view
```

### log

```solidity
function log(uint256 p0, address p1, address p2, address p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, string p2, string p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, string p2, bool p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, string p2, address p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, bool p2, string p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, bool p2, address p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, address p2, string p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, address p2, bool p3) internal view
```

### log

```solidity
function log(string p0, uint256 p1, address p2, address p3) internal view
```

### log

```solidity
function log(string p0, string p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, string p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(string p0, string p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(string p0, string p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(string p0, string p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, string p1, string p2, string p3) internal view
```

### log

```solidity
function log(string p0, string p1, string p2, bool p3) internal view
```

### log

```solidity
function log(string p0, string p1, string p2, address p3) internal view
```

### log

```solidity
function log(string p0, string p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, string p1, bool p2, string p3) internal view
```

### log

```solidity
function log(string p0, string p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(string p0, string p1, bool p2, address p3) internal view
```

### log

```solidity
function log(string p0, string p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, string p1, address p2, string p3) internal view
```

### log

```solidity
function log(string p0, string p1, address p2, bool p3) internal view
```

### log

```solidity
function log(string p0, string p1, address p2, address p3) internal view
```

### log

```solidity
function log(string p0, bool p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, bool p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(string p0, bool p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(string p0, bool p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(string p0, bool p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, bool p1, string p2, string p3) internal view
```

### log

```solidity
function log(string p0, bool p1, string p2, bool p3) internal view
```

### log

```solidity
function log(string p0, bool p1, string p2, address p3) internal view
```

### log

```solidity
function log(string p0, bool p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, bool p1, bool p2, string p3) internal view
```

### log

```solidity
function log(string p0, bool p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(string p0, bool p1, bool p2, address p3) internal view
```

### log

```solidity
function log(string p0, bool p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, bool p1, address p2, string p3) internal view
```

### log

```solidity
function log(string p0, bool p1, address p2, bool p3) internal view
```

### log

```solidity
function log(string p0, bool p1, address p2, address p3) internal view
```

### log

```solidity
function log(string p0, address p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, address p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(string p0, address p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(string p0, address p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(string p0, address p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, address p1, string p2, string p3) internal view
```

### log

```solidity
function log(string p0, address p1, string p2, bool p3) internal view
```

### log

```solidity
function log(string p0, address p1, string p2, address p3) internal view
```

### log

```solidity
function log(string p0, address p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, address p1, bool p2, string p3) internal view
```

### log

```solidity
function log(string p0, address p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(string p0, address p1, bool p2, address p3) internal view
```

### log

```solidity
function log(string p0, address p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(string p0, address p1, address p2, string p3) internal view
```

### log

```solidity
function log(string p0, address p1, address p2, bool p3) internal view
```

### log

```solidity
function log(string p0, address p1, address p2, address p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, string p2, string p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, string p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, string p2, address p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, bool p2, string p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, bool p2, address p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, address p2, string p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, address p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, uint256 p1, address p2, address p3) internal view
```

### log

```solidity
function log(bool p0, string p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, string p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(bool p0, string p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, string p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(bool p0, string p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, string p1, string p2, string p3) internal view
```

### log

```solidity
function log(bool p0, string p1, string p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, string p1, string p2, address p3) internal view
```

### log

```solidity
function log(bool p0, string p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, string p1, bool p2, string p3) internal view
```

### log

```solidity
function log(bool p0, string p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, string p1, bool p2, address p3) internal view
```

### log

```solidity
function log(bool p0, string p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, string p1, address p2, string p3) internal view
```

### log

```solidity
function log(bool p0, string p1, address p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, string p1, address p2, address p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, string p2, string p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, string p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, string p2, address p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, bool p2, string p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, bool p2, address p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, address p2, string p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, address p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, bool p1, address p2, address p3) internal view
```

### log

```solidity
function log(bool p0, address p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, address p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(bool p0, address p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, address p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(bool p0, address p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, address p1, string p2, string p3) internal view
```

### log

```solidity
function log(bool p0, address p1, string p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, address p1, string p2, address p3) internal view
```

### log

```solidity
function log(bool p0, address p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, address p1, bool p2, string p3) internal view
```

### log

```solidity
function log(bool p0, address p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, address p1, bool p2, address p3) internal view
```

### log

```solidity
function log(bool p0, address p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(bool p0, address p1, address p2, string p3) internal view
```

### log

```solidity
function log(bool p0, address p1, address p2, bool p3) internal view
```

### log

```solidity
function log(bool p0, address p1, address p2, address p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, string p2, string p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, string p2, bool p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, string p2, address p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, bool p2, string p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, bool p2, address p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, address p2, string p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, address p2, bool p3) internal view
```

### log

```solidity
function log(address p0, uint256 p1, address p2, address p3) internal view
```

### log

```solidity
function log(address p0, string p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, string p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(address p0, string p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(address p0, string p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(address p0, string p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, string p1, string p2, string p3) internal view
```

### log

```solidity
function log(address p0, string p1, string p2, bool p3) internal view
```

### log

```solidity
function log(address p0, string p1, string p2, address p3) internal view
```

### log

```solidity
function log(address p0, string p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, string p1, bool p2, string p3) internal view
```

### log

```solidity
function log(address p0, string p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(address p0, string p1, bool p2, address p3) internal view
```

### log

```solidity
function log(address p0, string p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, string p1, address p2, string p3) internal view
```

### log

```solidity
function log(address p0, string p1, address p2, bool p3) internal view
```

### log

```solidity
function log(address p0, string p1, address p2, address p3) internal view
```

### log

```solidity
function log(address p0, bool p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, bool p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(address p0, bool p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(address p0, bool p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(address p0, bool p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, bool p1, string p2, string p3) internal view
```

### log

```solidity
function log(address p0, bool p1, string p2, bool p3) internal view
```

### log

```solidity
function log(address p0, bool p1, string p2, address p3) internal view
```

### log

```solidity
function log(address p0, bool p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, bool p1, bool p2, string p3) internal view
```

### log

```solidity
function log(address p0, bool p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(address p0, bool p1, bool p2, address p3) internal view
```

### log

```solidity
function log(address p0, bool p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, bool p1, address p2, string p3) internal view
```

### log

```solidity
function log(address p0, bool p1, address p2, bool p3) internal view
```

### log

```solidity
function log(address p0, bool p1, address p2, address p3) internal view
```

### log

```solidity
function log(address p0, address p1, uint256 p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, address p1, uint256 p2, string p3) internal view
```

### log

```solidity
function log(address p0, address p1, uint256 p2, bool p3) internal view
```

### log

```solidity
function log(address p0, address p1, uint256 p2, address p3) internal view
```

### log

```solidity
function log(address p0, address p1, string p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, address p1, string p2, string p3) internal view
```

### log

```solidity
function log(address p0, address p1, string p2, bool p3) internal view
```

### log

```solidity
function log(address p0, address p1, string p2, address p3) internal view
```

### log

```solidity
function log(address p0, address p1, bool p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, address p1, bool p2, string p3) internal view
```

### log

```solidity
function log(address p0, address p1, bool p2, bool p3) internal view
```

### log

```solidity
function log(address p0, address p1, bool p2, address p3) internal view
```

### log

```solidity
function log(address p0, address p1, address p2, uint256 p3) internal view
```

### log

```solidity
function log(address p0, address p1, address p2, string p3) internal view
```

### log

```solidity
function log(address p0, address p1, address p2, bool p3) internal view
```

### log

```solidity
function log(address p0, address p1, address p2, address p3) internal view
```

