var ShreyanshTokenSale = artifacts.require("./ShreyanshTokenSale.sol");

contract('ShreyanshTokenSale', function(accounts) {
    var tokenSaleInstance;
    var tokenPrice = 1000000000000000; // in wei
    var buyer = accounts[1];
    var numberOfTokens;

    it('initializes the contract with the correct values', function() {
        return ShreyanshTokenSale.deployed().then(function(instance) {
            tokenSaleInstance = instance;
            return tokenSaleInstance.address
        }).then(function(address) {
            assert.notEqual(address, 0x0, 'has contract address');
            return tokenSaleInstance.tokenContract();
        }).then(function(address) {
            assert.notEqual(address, 0x0, 'has token contract address');
            return tokenSaleInstance.tokenPrice();
        }).then(function(price) {
            assert.equal(price, tokenPrice, 'token price is correct');
        });
    });

    it('facilitates token buying', function() {
        return ShreyanshTokenSale.deployed().then(function(instance) {
            tokenSaleInstance = instance;
            numberOfTokens = 10;
            return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice })
        }).then(function(receipt) {
            return tokenSaleInstance.tokenSold();
        }).then(function(amount) {
            assert.equal(amount.toNumber(), numberOfTokens, 'increments the number of tokens sold');
        });
    });
});