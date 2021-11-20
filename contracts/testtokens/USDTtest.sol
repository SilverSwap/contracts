// contracts/ExampleToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract USDTtest is ERC20 {
    constructor ()
        ERC20("USDT Test Coin", "USDTt")
    {       
        _mint(msg.sender, 1000000000000 * 10 ** decimals() );
        _mint(0xCc3C03f6389ffC1366fCFf23766b4F6a5f9E05F9, 1000000 * 10 ** decimals() );
    }
}