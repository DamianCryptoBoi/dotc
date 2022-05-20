const { expect } = require("chai");
const { ethers, network } = require("hardhat");

const types = {
  Order: [
    { name: "maker", type: "address" },
    { name: "makerToken", type: "address" },
    { name: "takerToken", type: "address" },
    { name: "makingAmount", type: "uint256" },
    { name: "takingAmount", type: "uint256" },
    { name: "expireTime", type: "uint256" },
    { name: "salt", type: "uint256" },
  ],
};

const sign = async (order, marketAddress, signer) => {
  const domain = {
    name: "Fixed Order Market",
    version: "1.0",
    chainId: network.config.chainId,
    verifyingContract: marketAddress,
  };

  signature = await signer._signTypedData(domain, types, order);

  return signature;
};

describe("Fixed", async () => {
  beforeEach(async () => {
    [addr1, addr2] = await ethers.getSigners();

    Fixed = await ethers.getContractFactory("FixedMarket");
    fixed = await Fixed.deploy();
    await fixed.deployed();

    ERC20 = await ethers.getContractFactory("MockToken");
    tokenA = await ERC20.deploy();
    await tokenA.deployed();

    tokenB = await ERC20.deploy();
    await tokenB.deployed();

    await tokenB.transfer(addr2.address, ethers.utils.parseEther("100000000"));

    await tokenA.approve(
      fixed.address,
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
    );

    await tokenB
      .connect(addr2)
      .approve(
        fixed.address,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      );
  });

  it("should fill order ", async () => {
    order = {
      maker: addr1.address,
      makerToken: tokenA.address,
      takerToken: tokenB.address,
      makingAmount: 1000,
      takingAmount: 1000,
      expireTime: 10000000000,
      salt: 69,
    };

    sig = await sign(order, fixed.address, addr1);

    await fixed.connect(addr2).fillOrder(order, sig);

    expect(await tokenB.balanceOf(addr1.address)).to.be.equal(1000);
    expect(await tokenA.balanceOf(addr2.address)).to.be.equal(1000);
  });

  it("should cancel order", async () => {
    order = {
      maker: addr1.address,
      makerToken: tokenA.address,
      takerToken: tokenB.address,
      makingAmount: 1000,
      takingAmount: 1000,
      expireTime: 10000000000,
      salt: 69,
    };

    sig = await sign(order, fixed.address, addr1);

    const hash = await fixed.hashOrder(order);

    await fixed.cancelOrder(hash);

    await expect(fixed.connect(addr2).fillOrder(order, sig)).to.be.revertedWith(
      "closed"
    );
  });

  it("should check signature", async () => {
    order = {
      maker: addr1.address,
      makerToken: tokenA.address,
      takerToken: tokenB.address,
      makingAmount: 1000,
      takingAmount: 1000,
      expireTime: 10000000000,
      salt: 69,
    };

    order1 = {
      maker: addr1.address,
      makerToken: tokenA.address,
      takerToken: tokenB.address,
      makingAmount: 1000,
      takingAmount: 10000,
      expireTime: 10000000000,
      salt: 69,
    };

    sig = await sign(order, fixed.address, addr1);

    await expect(
      fixed.connect(addr2).fillOrder(order1, sig)
    ).to.be.revertedWith("bad signature");
  });

  it("should check amount", async () => {
    order = {
      maker: addr1.address,
      makerToken: tokenA.address,
      takerToken: tokenB.address,
      makingAmount: 0,
      takingAmount: 1000,
      expireTime: 100000000000,
      salt: 69,
    };

    sig = await sign(order, fixed.address, addr1);

    await expect(fixed.connect(addr2).fillOrder(order, sig)).to.be.revertedWith(
      "can't swap 0 amount"
    );
  });

  it("should check expire time", async () => {
    order = {
      maker: addr1.address,
      makerToken: tokenA.address,
      takerToken: tokenB.address,
      makingAmount: 1000,
      takingAmount: 1000,
      expireTime: 0,
      salt: 69,
    };

    sig = await sign(order, fixed.address, addr1);

    await expect(fixed.connect(addr2).fillOrder(order, sig)).to.be.revertedWith(
      "order expired"
    );
  });
});
