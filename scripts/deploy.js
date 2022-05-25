const { ethers, upgrades } = require("hardhat");

async function main() {
  const Fixed = await ethers.getContractFactory("FixedMarket");
  const fixed = await Fixed.deploy();

  await fixed.deployed();

  console.log("Fixed deployed to:", fixed.address);

  const Escrow = await ethers.getContractFactory("EscrowMarket");
  const escrow = await upgrades.deployProxy(Escrow, [], { kind: "uups" });

  await escrow.deployed();
  console.log("Escrow deployed to:", escrow.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
