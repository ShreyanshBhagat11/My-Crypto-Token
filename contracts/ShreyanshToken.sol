// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ShreyanshToken {
    uint256 public totalSupply; // state variable i.e. every changes made will be upload to block chain

    constructor() {
        totalSupply = 1000000;
    }
}
