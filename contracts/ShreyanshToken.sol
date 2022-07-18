// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ShreyanshToken {
    string public name = "Shreyansh Token";
    string public symbol = "Shreyansh";
    string public standard = "Shreyansh Token v1.0";

    uint256 public totalSupply; // state variable i.e. every changes made will be upload to block chain

    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    // event Approval(
    //     address indexed _owner,
    //     address indexed _spender,
    //     uint256 _value
    // );

    mapping(address => mapping(address => uint256)) public allowance;

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        require(balanceOf[msg.sender] >= _value);

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }
}
