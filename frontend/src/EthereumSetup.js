import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/'));

var address = '0x5fFbFcBFf27fc2d5A5A7bA341F971459ECff8789';
var abi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_ticket",
          "type": "uint256"
        },
        {
          "name": "_event",
          "type": "bytes32"
        }
      ],
      "name": "verify",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_event",
          "type": "bytes32"
        }
      ],
      "name": "purchaseTix",
      "outputs": [
        {
          "name": "ticketID",
          "type": "uint256"
        }
      ],
      "payable": true,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "bytes32"
        },
        {
          "name": "_maxTickets",
          "type": "uint256"
        },
        {
          "name": "_ticketPrice",
          "type": "uint256"
        }
      ],
      "name": "createEvent",
      "outputs": [],
      "payable": false,
      "type": "function"
    }
  ];

var contract = new web3.eth.Contract(abi, address);

export {web3, contract};
