const { ethers, upgrades } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  const Fixed = await ethers.getContractFactory("FixedMarket");
  const fixed = await Fixed.deploy(100, 100, owner.address);

  await fixed.deployed();

  console.log("Fixed deployed to:", fixed.address);

  // const Escrow = await ethers.getContractFactory("EscrowMarket");
  // const escrow = await upgrades.deployProxy(Escrow, [100, 100, owner.address], {
  //   kind: "uups",
  // });

  // await escrow.deployed();
  // console.log("Escrow deployed to:", escrow.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
