const { ethers, run } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();

  //   const MemeKong = await ethers.getContractFactory("MEMEKONG");
  //   const mmk = await MemeKong.deploy();

  //   await mmk.deployed();

  //   console.log("MemeKong deployed to:", mmk.address);

  //   await mmk.setTrading(true);

  //   console.log("open trade");

  //   await run("verify:verify", {
  //     address: mmk.address,
  //     constructorArguments: [],
  //   });

  //   console.log("Memekong Verified");

  //   const TOKEN = await ethers.getContractFactory("THELUCKYCAT");
  //   const token = await TOKEN.deploy();

  //   await token.deployed();

  //   console.log("TOKEN deployed to:", token.address);

  //   await token.enableTrading();

  //   console.log("open trade");

  //   await run("verify:verify", {
  //     address: token.address,
  //     constructorArguments: [],
  //   });

  //   console.log("TOKEN Verified");
  //   const TOKEN = await ethers.getContractFactory("YASHA");
  //   const token = await TOKEN.deploy();

  //   await token.deployed();

  //   console.log("TOKEN deployed to:", token.address);

  //   await token.airdropToWallets([owner.address], [100000000]);

  //   await token.enableTrading();

  //   console.log("open trade");

  //   await run("verify:verify", {
  //     address: token.address,
  //     constructorArguments: [],
  //   });

  //   console.log("TOKEN Verified");

  //   const TOKEN = await ethers.getContractFactory("SCIDAO");
  //   const token = await TOKEN.deploy();

  //   await token.deployed();

  //   console.log("TOKEN deployed to:", token.address);

  //   await token.airdropToWallets([owner.address], [100000000]);

  //   await token.enableTrading();

  //   console.log("open trade");

  //   await run("verify:verify", {
  //     address: token.address,
  //     constructorArguments: [],
  //   });

  //   console.log("TOKEN Verified");

  //   const TOKEN = await ethers.getContractFactory("FLIPAPE");
  //   const token = await TOKEN.deploy();

  //   await token.deployed();

  //   console.log("TOKEN deployed to:", token.address);

  //   await token.enableTrading();

  //   console.log("open trade");

  //   await run("verify:verify", {
  //     address: token.address,
  //     constructorArguments: [],
  //   });

  //   console.log("TOKEN Verified");
  const TOKEN = await ethers.getContractFactory("Shibnobi");
  const token = await TOKEN.deploy();

  await token.deployed();

  console.log("TOKEN deployed to:", token.address);

  await token.allowtrading();

  console.log("open trade");

  await run("verify:verify", {
    address: token.address,
    constructorArguments: [],
  });

  console.log("TOKEN Verified");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// memekong : 0x65EcdeEE9ae2f62b5361616BE027597c19f8CBEa
// maneki neko: 0x33FD6539328B138441226C36e6Df10f405856Ab2
// Inuyasha : 0x0045ca7110e0193138AB14894Ffc50d0E5dB3118
// Theory : 0xd7eB397c32c66b446C19cB2f0D6B180BCb25b220
// monke : 0x6F9AEC18b6dDd0705E4c09b5983D198f5De09B8E
// Shinobi: 0x7850F5493A5b728615c7c76ACbCb26F7e370486C
