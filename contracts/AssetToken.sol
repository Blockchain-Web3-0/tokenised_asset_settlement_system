// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Libraries.sol"; // Optimized library for SafeMath

contract AssetToken is ERC20, Ownable {
    using SafeMath for uint256;

    constructor(uint256 initialSupply) ERC20("SecurityToken", "STK") {
        _mint(msg.sender, initialSupply);
    }

    function issueAsset(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    function settleAsset(address from, address to, uint256 amount) external onlyOwner {
        _transfer(from, to, amount);
    }

    function batchSettle(address[] calldata froms, address[] calldata tos, uint256[] calldata amounts) external onlyOwner {
        require(froms.length == tos.length && tos.length == amounts.length, "Arrays length mismatch");
        for (uint256 i = 0; i < froms.length; i++) {
            _transfer(froms[i], tos[i], amounts[i]);
        }
    }
}
