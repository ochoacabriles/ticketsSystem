var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
const { expect, assert } = chai
const testRevert = require('../node_modules/zeppelin-solidity/test/helpers/assertRevert.js')

var ticketsToken = artifacts.require('ticketsToken')

contract('Testing ERC721 contract', function(accounts) {
    let token
    const name = 'testToken'
    const symbol = 'TEST'
    const caps = [3, 4, 5, 6]
    //rates = 0.1 ETH, 0.2 ETH and 0.3 ETH
    const rates = [100000000000000000, 200000000000000000, 300000000000000000, 400000000000000000]
    var maxPerSale = 2
    var supply
    var expectedSupply
    var balances = []

    it('Should be able to deploy ERC721 Token', async() => {
        token = await ticketsToken.new(name, symbol, caps, rates, maxPerSale, {from: accounts[4]})
        expect(await token.symbol()).to.equal(symbol)
        expect(await token.name()).to.equal(name)
    })

    it('Should revert saleToken if any condition is not met', async() => {
            //_quantity shouldn't be 0
            testRevert.assertRevert( token.saleToken(0, 0, {value: rates[0]})) 
            //_tokenType should be valid
            testRevert.assertRevert( token.saleToken(caps.length, 1, {value: rates[0]}))
            //sent amount should be enough
            testRevert.assertRevert( token.saleToken(0, 1, {value: (rates[0] - 10)}))
            //shouldn't allow to mint more tokens than allowed by cap
            testRevert.assertRevert( token.saleToken(0, caps[0] + 1, {value: rates[0]}))
            supply = await token.totalSupply()
            expectedSupply = 0
            expect(supply.toNumber()).to.equal(expectedSupply)
    })

    it('Should mint & send tokens when receive enough ETH and conditions are met', async() => {
        //Minting 2 tokens of each type excpet type 3
        await token.saleToken(0, 2, {value: (2 * rates[0])})
        await token.saleToken(1, 2, {value: (100 * rates[1]), from: accounts[1]})
        await token.saleToken(2, 2, {value: (2 * rates[2]), from: accounts[2]})
        expectedSupply = supply.toNumber() + 6
        supply = await token.totalSupply()
        balances[0] = await token.balanceOf(accounts[0])
        balances[1] = await token.balanceOf(accounts[1])
        balances[2] = await token.balanceOf(accounts[2])
        expect(await token.ownerOf(1)).to.equal(accounts[0])
        expect(await token.ownerOf(2)).to.equal(accounts[0])
        expect(await token.ownerOf(3)).to.equal(accounts[1])
        expect(await token.ownerOf(4)).to.equal(accounts[1])
        expect(await token.ownerOf(5)).to.equal(accounts[2])
        expect(await token.ownerOf(6)).to.equal(accounts[2])
        expect(supply.toNumber()).to.equal(expectedSupply)
        expect(balances[0].toNumber()).to.equal(2)
        expect(balances[1].toNumber()).to.equal(2)
        expect(balances[2].toNumber()).to.equal(2)
    })

    it('Should not allow to mint more tokens than allowed by cap', async() => {
        //with 2 type 0 tokens the cap is reached
        testRevert.assertRevert(token.saleToken(0, 2, {value: rates[0]}))
        expectedSupply = supply.toNumber()
        supply = await token.totalSupply()
        expect(supply.toNumber()).to.equal(expectedSupply)
    })

    it('Should revert courtesyToken if any condition is not met', async() => {
        //only the owner should be able to call courtesyToken
        testRevert.assertRevert( token.courtesyToken(3, 2, accounts[3], {from: accounts[1]}))
        //_quantity shouldn't be 0
        testRevert.assertRevert( token.saleToken(3, 0, {from: accounts[4]})) 
        //_tokenType should be valid
        testRevert.assertRevert( token.saleToken(caps.length, 1, {from: accounts[4]}))
        //shouldn't allow to mint more tokens than allowed by cap
        testRevert.assertRevert( token.saleToken(3, caps[3] + 1, {from: accounts[4]}))
        expectedSupply = supply.toNumber()
        supply = await token.totalSupply()
        expect(supply.toNumber()).to.equal(expectedSupply)
    })

    it('Should mint & send courtesy tokens as required by owner', async() => {
        //sending 2 courtesy tokens to accounts[3]
        await token.courtesyToken(3, 2, accounts[3], {from: accounts[4]}) 
        expectedSupply = supply.toNumber() + 2
        supply = await token.totalSupply()
        expect(supply.toNumber()).to.equal(expectedSupply)
        expect(await token.ownerOf(7)).to.equal(accounts[3])
    })


})