const ShreyanshToken = artifacts.require("./ShreyanshToken");
var ShreyanshTokenSale = artifacts.require("./ShreyanshTokenSale.sol");

module.exports = function(deployer) {
    deployer.deploy(ShreyanshToken, 1000000);

    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(ShreyanshTokenSale, ShreyanshToken.address, tokenPrice);
};