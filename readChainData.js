const { ethers } = require('ethers');

const readChainData = async () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://magical-neat-owl.ethereum-goerli.quiknode.pro/3be4aeedc4f54cc10ab9fb5fbaf586ce69afd9e2/'
  );

  
  const blockNumber = await provider.getBlockNumber();
  console.log('Block Number:', blockNumber);

}
readChainData();