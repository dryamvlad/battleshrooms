// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BCBPuzzlePrizes is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string _baseTokenURI;
    uint256 private _genSupply = 30;

    constructor() ERC721("BCB Puzzle Prizes", "BCBPP") {
        
    }

    function mintPrize(uint256 id) public onlyOwner {
        uint256 supply = totalSupply();
        require(supply + 1 <= _genSupply, "Exceeds maximum supply");

        _safeMint(msg.sender, id);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function setGenSupply(uint256 _newGenSupply) public onlyOwner {
        _genSupply = _newGenSupply;
    }

    function getGenSupply() public view returns (uint256) {
        return _genSupply;
    }
}
