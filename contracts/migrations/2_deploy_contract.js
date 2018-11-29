var ticketsToken = artifacts.require("./ticketsToken.sol");

const caps = [10, 12, 15]
//rates = 0.1 ETH, 0.2 ETH and 0.3 ETH
const rates = [100000000000000000, 200000000000000000, 300000000000000000]
const maxPerSale = 5

module.exports = async function(deployer) {
  await deployer.deploy(ticketsToken, 'TicketsToken', 'TCK', caps, rates, maxPerSale);
};