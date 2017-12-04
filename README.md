# ticketfaster
A decentralized verifiable ticketing solution on the Ethereum blockchain. Users interact with a React frontend that allows for the creation of new events by organizers and the purchase of verifiable tickets by customers. Backend written in Solidity utilizes unique ticket ID generation and Ethereum wallet IDs combined with the permanence of the Ethereum blockchain to prevent the sale of [counterfeit tickets](https://www.click2houston.com/news/2-men-accused-of-selling-fake-world-series-tickets-in-houston) on the secondary market. A [simple and transparent fee structure](https://docs.google.com/presentation/d/11tFecUtqm7dXYOa3N5Hqs9johPz-XcXnqwzNS13ZRKc/edit#slide=id.g2a192b511a_0_6), allows for monetization extensibility into either primary or secondary ticketing markets. 

### Prerequisites
Before starting the demo, please install the following required files:
1. [Node.js](https://nodejs.org/en/) - Javascript runtime dependency for backend  
2. [Truffle](http://truffleframework.com/) - Development framework for Ethereum to compile and deploy contracts  
3. [web3](https://github.com/ethereum/web3.js/) - Javascript libraries to interact with local and remote Ethereum nodes

## Deployment
To view a demo with the existing deployed contract on the Rinkeby testnet, clone the repository and run `npm start` in the frontend folder. To setup and deploy your own instance of the contract, do the following:
1. Run `truffle compile` in the project folder to compile the contract.
2. Specify a test network to deploy to in `truffle.js` 
2. Run `truffle migrate` to deploy your new contract to the test network
3. Modify `EthereumSetup.js` with the adderss of your newly deployed contract
4. Run `npm start` in `frontend` to view the demo


## Additional Information
Slide Deck: [doc](https://docs.google.com/presentation/d/11tFecUtqm7dXYOa3N5Hqs9johPz-XcXnqwzNS13ZRKc/edit?usp=sharing)  
Project Spec: [doc](https://docs.google.com/document/d/1i6fjkz7dGTws6KDWv0CP5jJ3fDOfGoojQllFuUx-F2w/edit)