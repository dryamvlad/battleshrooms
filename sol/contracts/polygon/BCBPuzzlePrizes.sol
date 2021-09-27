// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract ContextMixin {
    function msgSender()
        internal
        view
        returns (address payable sender)
    {
        if (msg.sender == address(this)) {
            bytes memory array = msg.data;
            uint256 index = msg.data.length;
            assembly {
                // Load the 32 bytes word from memory with the address on the lower 20 bytes, and mask those.
                sender := and(
                    mload(add(array, index)),
                    0xffffffffffffffffffffffffffffffffffffffff
                )
            }
        } else {
            sender = payable(msg.sender);
        }
        return sender;
    }
}

contract BCBPuzzlePrizes is ERC721Enumerable, ContextMixin, Ownable {
    using Strings for uint256;

    string _baseTokenURI;
    uint256 private _genSupply = 33;

    constructor() ERC721("BCB Puzzle Prizes", "BCBPP") {}

    function mintPrize(address winner, uint256 id) public onlyOwner {
        uint256 supply = totalSupply();
        require(supply + 1 <= _genSupply, "Exceeds maximum supply");

        _safeMint(winner, id);
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

    function isApprovedForAll(address _owner, address _operator)
        public
        view
        override
        returns (bool isOperator)
    {
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }

        return ERC721.isApprovedForAll(_owner, _operator);
    }

    function _msgSender() internal view override returns (address sender) {
        return ContextMixin.msgSender();
    }
}
