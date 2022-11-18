require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    puter: {
      url: "https://rpc.ismoney.wtf",
      accounts: ["5625daecb4ba9814e9182c1e53d25ff7f1102dc12d7797912356bc0e597386f3"]
    }
  }
};
