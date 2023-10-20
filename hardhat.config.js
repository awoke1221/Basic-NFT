require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

module.exports = {
  networks:{
    hardhat: {},
    sepolia:{
      url:`https://sepolia.infura.io/v3/${process.env.Infura_API_Key}`,
      accounts:[`0x${process.env.private_key}`]
    }
  },
  solidity: "0.8.20",
};
