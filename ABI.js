const { ethers } = require("ethers");

module.exports = {
    humanReadableABI: new ethers.utils.Interface([
        "function getBalance()  view returns (uint)",
        "function enroll() returns (bool)",
        "function deposit() payable returns (uint)"
    ])
};