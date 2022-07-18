const ShreyanshToken = artifacts.require("ShreyanshToken");

module.exports = function(deployer) {
    deployer.deploy(ShreyanshToken, 1000000);
};