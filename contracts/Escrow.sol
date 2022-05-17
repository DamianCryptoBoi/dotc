// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

contract DOTCEscrow is
    Initializable,
    PausableUpgradeable,
    OwnableUpgradeable,
    UUPSUpgradeable
{
    struct Offer {
        address maker;
        address tokenA; // exchange A
        address tokenB; // for B
        uint256 amountA;
        uint256 amountB;
        uint256 filled;
        uint256 listingTime;
        uint256 expireTime;
    }

    event CreateOffer(
        uint256 id,
        address maker,
        address tokenA,
        address tokenB,
        uint256 amountA,
        uint256 amountB,
        uint256 listingTime,
        uint256 expireTime
    );

    event AcceptOffer(
        uint256 id,
        address from,
        uint256 amountA,
        uint256 amountB
    );

    event CancelOffer(uint256 id);

    mapping(uint256 => Offer) public offer;
    uint256 public nextOfferId;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function initialize() public initializer {
        __Pausable_init();
        __Ownable_init();
        __UUPSUpgradeable_init();
    }

    function createOffer(
        address _tokenA,
        address _tokenB,
        uint256 _amountA,
        uint256 _amountB,
        uint256 _listingTime,
        uint256 _expireTime
    ) external whenNotPaused {
        uint256 currentId = nextOfferId;
        nextOfferId++;
        IERC20Upgradeable(_tokenA).transferFrom(
            msg.sender,
            address(this),
            _amountA
        );
        offer[currentId] = Offer(
            msg.sender,
            _tokenA,
            _tokenB,
            _amountA,
            _amountB,
            0,
            _listingTime,
            _expireTime
        );

        emit CreateOffer(
            currentId,
            msg.sender,
            _tokenA,
            _tokenB,
            _amountA,
            _amountB,
            _listingTime,
            _expireTime
        );
    }

    function acceptOffer(uint256 _id, uint256 _amountA) external whenNotPaused {
        Offer storage acceptedOffer = offer[_id];
        acceptedOffer.filled = acceptedOffer.amountA - _amountA;

        require(
            block.timestamp >= acceptedOffer.listingTime &&
                block.timestamp < acceptedOffer.expireTime,
            "not available yet or expired"
        );

        require(acceptedOffer.filled < acceptedOffer.amountA, "closed");

        uint256 acceptedAmountB = ((_amountA * acceptedOffer.amountB)) /
            acceptedOffer.amountA;

        require(acceptedAmountB > 0, "amount too low");

        // move tokenB from sender to maker
        IERC20Upgradeable(acceptedOffer.tokenB).transferFrom(
            msg.sender,
            acceptedOffer.maker,
            acceptedAmountB
        );

        // moke token A from contract to sender
        IERC20Upgradeable(acceptedOffer.tokenA).transferFrom(
            address(this),
            acceptedOffer.maker,
            _amountA
        );

        emit AcceptOffer(_id, msg.sender, _amountA, acceptedAmountB);
    }

    function cancelOffer(uint256 _id) external whenNotPaused {
        Offer storage canceledOffer = offer[_id];

        require(msg.sender == canceledOffer.maker, "not maker");
        require(canceledOffer.filled < canceledOffer.amountA, "closed");

        require(block.timestamp <= canceledOffer.expireTime, "expired");

        uint256 remainingToken = canceledOffer.amountA - canceledOffer.filled;

        canceledOffer.filled = canceledOffer.amountA;

        IERC20Upgradeable(canceledOffer.tokenA).transferFrom(
            address(this),
            canceledOffer.maker,
            remainingToken
        );

        emit CancelOffer(_id);
    }

    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}
}
