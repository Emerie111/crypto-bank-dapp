const { ethers } = require('ethers');
const ABI = require('./ABI');

const callReadFunction = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://magical-neat-owl.ethereum-goerli.quiknode.pro/3be4aeedc4f54cc10ab9fb5fbaf586ce69afd9e2/'
  );

  
  const contract = new ethers.Contract(
    '0x957e36710d451842E6b77566DC4F07EDA19512B6',
    ABI.humanReadableABI,
    provider
  );

  const balance = await contract.getBalance();
  const formattedBalance = ethers.utils.formatUnits(balance, 18);
  console.log('Balance:', formattedBalance);
};

callReadFunction();