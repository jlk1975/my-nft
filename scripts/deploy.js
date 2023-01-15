async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("MyNFT");
  const token = await Token.deploy();

  console.log("Token address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// async function main() {
//   // Grab the contract factory 
//   const MyNFT = await ethers.getContractFactory("MyNFT");

//   // Start deployment, returning a promise that resolves to a contract object
//   const myNFT = await MyNFT.deploy(); // Instance of the contract 
//   console.log("Contract deployed to address:", myNFT.address);
// }

// main()
//  .then(() => process.exit(0))
//  .catch(error => {
//    console.error(error);
//    process.exit(1);
//  });