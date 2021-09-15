const { ethers, upgrades } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  //console.log("Account balance:", (await deployer.getBalance()).toString());

  var name = "Catoshi";  // token name
  var symbol = "CATS";   // token symbol

  const Catoshi = await ethers.getContractFactory("Catoshi");
  const CATS = await Catoshi.deploy(name, symbol);

  console.log("CATS Contract Address:", CATS.address);
}

main()
  .then(() =>  process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

