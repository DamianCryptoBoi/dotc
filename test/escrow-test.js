const { ZERO_ADDRESS } = require("@openzeppelin/test-helpers/src/constants");
const { expect } = require("chai");
const { ethers, upgrades, waffle } = require("hardhat");

const provider = waffle.provider;

describe("Escrow", async () => {
  beforeEach(async () => {
    [addr1, addr2, feeRecipient] = await ethers.getSigners();

    Escrow = await ethers.getContractFactory("EscrowMarket");
    escrow = await upgrades.deployProxy(
      Escrow,
      [100, 100, feeRecipient.address],
      { kind: "uups" }
    );

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

  it("Should set fees and fee recipient", async () => {
    await escrow.setFee(200, 200);

    await escrow.setFeeRecipient(addr1.address);

    expect((await escrow.makerFee()).toNumber()).to.be.equal(200);
    expect((await escrow.takerFee()).toNumber()).to.be.equal(200);

    expect(await escrow.feeRecipient()).to.be.equal(addr1.address);
  });

  it("Should create order", async function () {
    await expect(
      escrow.createOrder(
        tokenA.address,
        tokenA.address,
        1000000,
        1000,
        100000000000000
      )
    ).to.be.revertedWith("invalid token");

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

  it("Should create order ETH", async function () {
    await expect(
      escrow.createOrder(
        ZERO_ADDRESS,
        tokenB.address,
        1000000,
        1000,
        100000000000000,
        { value: 1 }
      )
    ).to.be.revertedWith("invalid eth value");

    await escrow.createOrder(
      ZERO_ADDRESS,
      tokenB.address,
      1000000,
      1000,
      100000000000000,
      { value: 1000000 }
    );

    expect((await escrow.nextOrderId()).toNumber()).to.equal(1);

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
    expect(tokenToGive).to.equal(ZERO_ADDRESS);
    expect(tokenToTake).to.equal(tokenB.address);
    expect(amountToGive.toNumber()).to.equal(1000000);
    expect(amountToTake.toNumber()).to.equal(1000);
    expect(filled.toNumber()).to.equal(0);
    expect(expireTime.toNumber()).to.equal(100000000000000);

    expect((await provider.getBalance(escrow.address)).toNumber()).to.equal(
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

  it("Should cancel order ETH", async function () {
    await escrow.createOrder(
      ZERO_ADDRESS,
      tokenB.address,
      1000000,
      1000,
      100000000000000,
      { value: 1000000 }
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

    await escrow.connect(addr2).fillOrder(0, 1000);

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);

    expect((await tokenA.balanceOf(escrow.address)).toNumber()).to.equal(0);

    expect((await tokenB.balanceOf(addr1.address)).toNumber()).to.equal(
      1000 - 10
    );

    expect((await tokenB.balanceOf(feeRecipient.address)).toNumber()).to.equal(
      10
    );

    expect((await tokenA.balanceOf(addr2.address)).toNumber()).to.equal(
      1000000 - 10000
    );

    expect((await tokenA.balanceOf(feeRecipient.address)).toNumber()).to.equal(
      10000
    );
  });

  it("Should fill order ETH: maker", async function () {
    await escrow.createOrder(
      ZERO_ADDRESS,
      tokenB.address,
      1000000,
      1000,
      100000000000000,
      { value: 1000000 }
    );

    await escrow.connect(addr2).fillOrder(0, 1000);

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);

    expect((await tokenB.balanceOf(addr1.address)).toNumber()).to.equal(
      1000 - 10
    );

    expect((await tokenB.balanceOf(feeRecipient.address)).toNumber()).to.equal(
      10
    );
  });

  it("Should fill order ETH: taker", async function () {
    await escrow.createOrder(
      tokenA.address,
      ZERO_ADDRESS,
      1000000,
      1000,
      100000000000000
    );

    await expect(
      escrow.connect(addr2).fillOrder(0, 1000, { value: 10 })
    ).to.be.revertedWith("invalid eth value");

    await escrow.connect(addr2).fillOrder(0, 1000, { value: 1000 });

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);

    expect((await tokenA.balanceOf(addr2.address)).toNumber()).to.equal(
      1000000 - 10000
    );

    expect((await tokenA.balanceOf(feeRecipient.address)).toNumber()).to.equal(
      10000
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

    await escrow.connect(addr2).fillOrder(0, 100);
    await escrow.connect(addr2).fillOrder(0, 100);
    await escrow.connect(addr2).fillOrder(0, 800);

    const [, , , , , filled, , ,] = await escrow.order(0);

    expect(filled.toNumber()).to.equal(1000000);

    expect((await tokenA.balanceOf(escrow.address)).toNumber()).to.equal(0);

    expect((await tokenB.balanceOf(addr1.address)).toNumber()).to.equal(
      1000 - 10
    );

    expect((await tokenB.balanceOf(feeRecipient.address)).toNumber()).to.equal(
      10
    );

    expect((await tokenA.balanceOf(addr2.address)).toNumber()).to.equal(
      1000000 - 10000
    );

    expect((await tokenA.balanceOf(feeRecipient.address)).toNumber()).to.equal(
      10000
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

    await escrow.connect(addr2).fillOrder(0, 1000);

    await expect(escrow.connect(addr2).fillOrder(0, 1000)).to.be.revertedWith(
      "amount too high or closed order"
    );
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
      1000000000000000,
      100000000000
    );

    await expect(escrow.connect(addr2).fillOrder(0, 1)).to.be.revertedWith(
      "invalid amounts"
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
