const HDWalletProvider = require("truffle-hdwallet-provider")
var mnemonic = "bottom coach practice sibling endorse trouble parent aunt quit attack gain kitten"

module.exports = {
  networks: {
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"),
      network_id: "4",
      gas: 4500000,
      gasPrice: 25000000000
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io"),
      network_id: "3",
      gas: 4500000,
      gasPrice: 25000000000
    },

    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },


  }
};
