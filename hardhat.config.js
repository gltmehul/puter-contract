require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    puter: {
      url: "https://rpc.ismoney.wtf",
      accounts: [PVT_KEY]
    }
  }
};
