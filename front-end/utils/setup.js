const Web3 = require('web3')
const contract = require('../../contracts/build/contracts/ticketsToken.json')
require('dotenv').config()

const contractAbi = contract.abi
const provider = "https://ropsten.infura.io/" + process.env.INFURA_TOKEN

var web3 = new Web3(new Web3.providers.HttpProvider(provider))

let address = process.env.CONTRACT_ADDRESS

const contractInstance = web3.eth.contract(contractAbi).at(address)

module.exports = contractInstance
