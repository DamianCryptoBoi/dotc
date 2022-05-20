const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

describe("Escrow", async () => {
  beforeEach(async () => {
    [addr1, addr2] = await ethers.getSigners();

    Escrow = await ethers.getContractFactory("EscrowMarket");
    escrow = await upgrades.deployProxy(Escrow, [], { kind: "uups" });

    ERC20 = await ethers.getContractFactory("MockToken");
    tokenA = await ERC20.deploy();
    await tokenA.deployed();

    tokenB = await ERC20.deploy();
    await tokenB.deployed();

    await tokenB.transfer(addr2.address, ethers.utils.parseEther("100000000"));

    await tokenA.approve(
      escrow.address,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );

    await tokenB
      .connect(addr2)
      .approve(
        escrow.address,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
  });

  it("Should upgrade", async () => {
    await upgrades.upgradeProxy(escrow.address, Escrow, { kind: "uups" });
  });

  it("Should create order", async function () {
    //     address _tokenToGive,
    //     address _tokenToTake,
    //     uint256 _amountToGive,
    //     uint256 _amountToTake,
    //     uint256 _listingTime,
    //     uint256 _expireTime
    await escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      100000000000000
    );

    expect((await escrow.nextOrderId()).toNumber()).to.equal(1);

    //     address maker;
    //     address tokenToGive;
    //     address tokenToTake;
    //     uint256 amountToGive;
    //     uint256 amountToTake;
    //     uint256 filled;
    //     uint256 listingTime;
    //     uint256 expireTime;

    const [
      maker,
      tokenToGive,
      tokenToTake,
      amountToGive,
      amountToTake,
      filled,
      expireTime,
    ] = await escrow.order(0);

    expect(maker).to.equal(addr1.address);
    expect(tokenToGive).to.equal(tokenA.address);
    expect(tokenToTake).to.equal(tokenB.address);
    expect(amountToGive.toNumber()).to.equal(1000000);
    expect(amountToTake.toNumber()).to.equal(1000);
    expect(filled.toNumber()).to.equal(0);
    expect(expireTime.toNumber()).to.equal(100000000000000);

    expect((await tokenA.balanceOf(escrow.address)).toNumber()).to.equal(
      1000000
    );
  });

  it("Should cancel order", async function () {
    await escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      100000000000000
    );

    await expect(escrow.connect(addr2).cancelOrder(0)).to.be.revertedWith(
      "not maker"
    );

    await escrow.cancelOrder(0);

    await expect(escrow.cancelOrder(0)).to.be.revertedWith("closed order");

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);
  });

  it("Should fill order", async function () {
    await escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      100000000000000
    );

    await escrow.connect(addr2).fillOrder(0, 1000000);

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);

    expect((await tokenA.balanceOf(escrow.address)).toNumber()).to.equal(0);

    expect((await tokenB.balanceOf(addr1.address)).toNumber()).to.equal(1000);

    expect((await tokenA.balanceOf(addr2.address)).toNumber()).to.equal(
      1000000
    );
  });

  it("Should allow partial fill", async function () {
    await escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      100000000000000
    );

    await escrow.connect(addr2).fillOrder(0, 100000);
    await escrow.connect(addr2).fillOrder(0, 100000);
    await escrow.connect(addr2).fillOrder(0, 800000);

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);

    expect((await tokenA.balanceOf(escrow.address)).toNumber()).to.equal(0);

    expect((await tokenB.balanceOf(addr1.address)).toNumber()).to.equal(1000);

    expect((await tokenA.balanceOf(addr2.address)).toNumber()).to.equal(
      1000000
    );
  });

  it("Should check fill", async function () {
    await escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      100000000000000
    );

    await escrow.connect(addr2).fillOrder(0, 1000000);

    await expect(
      escrow.connect(addr2).fillOrder(0, 1000000)
    ).to.be.revertedWith("amount too high or closed order");
  });

  it("Should check expire", async function () {
    await escrow.createOrder(tokenA.address, tokenB.address, 1000000, 1000, 0);

    await expect(
      escrow.connect(addr2).fillOrder(0, 1000000)
    ).to.be.revertedWith("order expired");
  });

  it("Should check amount 0", async function () {
    await escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      100000000000
    );

    await expect(escrow.connect(addr2).fillOrder(0, 1)).to.be.revertedWith(
      "amount too low"
    );
  });

  it("Should check pause", async () => {
    await escrow.pause();

    await expect(
      escrow.createOrder(
        tokenA.address,
        tokenB.address,
        1000000,
        1000,
        10000000000000,
        0
      )
    ).to.be.reverted;

    await escrow.unPause();

    escrow.createOrder(
      tokenA.address,
      tokenB.address,
      1000000,
      1000,
      10000000000000,
      0
    );
  });
});
