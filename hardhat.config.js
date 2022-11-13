require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://magical-neat-owl.ethereum-goerli.quiknode.pro/3be4aeedc4f54cc10ab9fb5fbaf586ce69afd9e2/",
      accounts: ["1a8dd3cd5fd0719b33309cc69616a182b5563b16356209bee5da632d86c41b39"],
    },
  },
};