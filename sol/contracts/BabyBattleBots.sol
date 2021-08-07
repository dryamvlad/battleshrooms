// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BabyBattleBots is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string _baseTokenURI;
    uint256 private _reserved = 100;
    uint256 private _price = 0.03 ether;
    uint256 private _genSupply = 3200;
    bool public _paused = true;

    address t1 = 0xb7d9580AA336FedA04F17c1B9bf49c2967dDB9F7;
    address t2 = 0xF129f79c05F6EA516d01176A3983475100CA64C4;

    constructor() ERC721("Baby Battle Bots", "BBB") {
        _safeMint(t1, 0);
    }

    function isPaused() public view virtual returns (bool) {
        return _paused;
    }

    function mintBot(uint256 num) public payable {
        uint256 supply = totalSupply();
        require(!_paused, "Sale paused");
        require(num < 21, "You can mint a maximum of 20 Bots");
        require(supply + num < _genSupply - _reserved, "Exceeds maximum Bots supply");
        require(msg.value >= _price * num, "Ether sent is not correct");

        for (uint256 i; i < num; i++) {
            _safeMint(msg.sender, supply + i);
        }
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function getPrice() public view returns (uint256) {
        return _price;
    }

    function setPrice(uint256 _newPrice) public onlyOwner {
        _price = _newPrice;
    }

    function setGenSupply(uint256 _newGenSupply) public onlyOwner {
        _genSupply = _newGenSupply;
    }

    function getGenSupply() public view returns (uint256) {
        return _genSupply;
    }

    function giveAway(address _to, uint256 _amount) external onlyOwner {
        require(_amount <= _reserved, "Exceeds reserved Bots supply");

        uint256 supply = totalSupply();
        for (uint256 i; i < _amount; i++) {
            _safeMint(_to, supply + i);
        }

        _reserved -= _amount;
    }

    function pause(bool val) public onlyOwner {
        _paused = val;
    }

    function withdraw() public payable onlyOwner {
        uint256 _balance = address(this).balance;
        uint256 w1 = _balance * 37 / 1000;
        uint256 w2 = _balance - w1;

        require(payable(t1).send(w1));
        require(payable(t2).send(w2));
    }
}
