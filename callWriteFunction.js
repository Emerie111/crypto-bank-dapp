const { ethers } = require("ethers");
const ABI = require("./ABI");

const callWriteFunction = async () => {
 // Create a provider instance
 const provider = new ethers.providers.JsonRpcProvider("https://magical-neat-owl.ethereum-goerli.quiknode.pro/3be4aeedc4f54cc10ab9fb5fbaf586ce69afd9e2/");

 // Create a wallet instance
 const wallet = new ethers.Wallet("1a8dd3cd5fd0719b33309cc69616a182b5563b16356209bee5da632d86c41b39", provider);

 // Create the contract instance and connect it to our wallet
 const contract = new ethers.Contract(
  "0x957e36710d451842E6b77566DC4F07EDA19512B6",
  ABI.humanReadableABI,
  wallet
 );

 const status = await contract.enroll();
 console.log("Status:", status);

 try {
    await contract.deposit{value: ethers.utils.parseUnits("10", 18)()};
    console.log("Deposit Success!");
  
    // Get balance of our wallet
    const balance = await contract.getBalance();
    const formattedBalance = ethers.utils.formatUnits(balance, 18);
    console.log('Balance:', formattedBalance);
   } catch (err) {
    console.log(err);
   }

 /** * Get ERC20 token symbol
 const symbol = await contract.symbol();** */

 // Call mint function from smart contract and mint 10 MOCK token
 /** *try {
  await contract.mint(wallet.address, ethers.utils.parseUnits("10", 18));
  console.log("Mint Success!");** */

  /** * Get balance of our wallet
  const balance = await contract.balanceOf(wallet.address);
  const formattedBalance = ethers.utils.formatUnits(balance, 18);
  console.log(
   `Token balance of ${wallet.address}: ${formattedBalance} ${symbol}`
  );
 } catch (err) {
  console.log(err);
 }** */
};

callWriteFunction();