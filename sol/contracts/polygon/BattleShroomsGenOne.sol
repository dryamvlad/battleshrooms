// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BattleShroomsGenOne is ERC721Enumerable, Ownable {

    using Strings for uint256;

    string _baseTokenURI;
    uint256 private _presaleReserved = 1100;
    uint256 private _giftReserved = 100;
    uint256 private _price = 100 ether;
    uint256 private _botHolderDiscont = 40 ether;
    uint256 private MAX_SUPPLY = 5000;
    uint256 private maxPerTx = 10;
    bool public _paused = true;
    bool public _presalePaused = true;
    IERC721Enumerable private oldContract = ERC721Enumerable(0x2746a61091E22B61882e8Bf2f5f8DB6F0444Af7a);

    mapping(address => bool) public _whiteListed;
    mapping(address => bool) public _botHolders;

    address t1 = 0xF129f79c05F6EA516d01176A3983475100CA64C4;

    constructor() ERC721("Battle Shrooms Gen One", "BSONE") {
        for(uint256 i; i < 10; i++){
            _safeMint( t1, i );
        }
    }

    function mintShroom(uint256 num) public payable {
        uint256 supply = totalSupply();
        uint256 currentPrice = _price;

        if(_botHolders[msg.sender])
            currentPrice -= _botHolderDiscont;

        require( !_paused, "Sale paused" );
        require( num <= maxPerTx, "Exceeds maximum amount of Shrooms per tx" );
        require( supply + num <= MAX_SUPPLY - _giftReserved - _presaleReserved, "Exceeds maximum Shrooms supply" );
        require( msg.value >= currentPrice * num, "Ether sent is not correct" );

        for(uint256 i; i < num; i++){
            _safeMint( msg.sender, supply + i );
        }
    }

    function mintPresaleShroom() public payable {
        uint256 supply = totalSupply();
        uint256 balance = balanceOf(msg.sender);
        uint256 currentPrice = _price;

        if(_botHolders[msg.sender])
            currentPrice -= _botHolderDiscont;

        require( !_presalePaused, "Presale paused" );
        require( supply + 1 <= _presaleReserved, "Exceeds maximum Shrooms presale reserved supply" );
        require( balance == 0, "You already have some Shrooms" );
        require( _whiteListed[msg.sender], "Sorry you are not whitelisted" );
        require( msg.value >= currentPrice, "Ether sent is not correct" );

        _safeMint( msg.sender, supply);
        _presaleReserved -= 1;
    }

    function addWL(address _wl) public onlyOwner() {
        _whiteListed[_wl] = true;
    }

    function addWLMany(address[] memory _wls) public onlyOwner() {
        require(totalSupply() + _wls.length <= _presaleReserved, 'Would exceed presale reserved supply');

        for(uint256 i = 0; i < _wls.length; i++) {
            addWL(_wls[i]);
        }
    }

    function addBotHolder(address _newHolder) public onlyOwner() {
        _botHolders[_newHolder] = true;
    }

    function addBotHolderMany(address[] memory _newBotHolders) public onlyOwner() {
        for(uint256 i = 0; i < _newBotHolders.length; i++) {
            addBotHolder(_newBotHolders[i]);
        }
    }

    function removeWL(address _wl) public onlyOwner() {
        _whiteListed[_wl] = false;
    }

    function removeWLMany(address[] memory _wls) public onlyOwner() {
        for(uint256 i = 0; i < _wls.length; i++) {
            removeWL(_wls[i]);
        }
    }

    function walletOfOwner(address _owner) public view returns(uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for(uint256 i; i < tokenCount; i++){
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    function oldWalletOfOwner(address _owner) public view returns(uint256[] memory) {
        uint256 tokenCount = oldContract.balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for(uint256 i; i < tokenCount; i++){
            tokensId[i] = oldContract.tokenOfOwnerByIndex(_owner, i);
        }
        return tokensId;
    }

    function migrateOne(address _addr) public onlyOwner() {
        uint256 tokenCount = oldContract.balanceOf(_addr);
        uint256[] memory tokensId = new uint256[](tokenCount);
        
        for(uint256 i; i < tokenCount; i++){
            tokensId[i] = oldContract.tokenOfOwnerByIndex(_addr, i);
        }
            
        for(uint cntTokens = 0; cntTokens < tokensId.length; cntTokens) {
            _safeMint(_addr, tokensId[cntTokens]);
        }
    }

    function migrateMany(address[] memory addresses) public onlyOwner() {
        for (uint256 cntAddress = 0; cntAddress < addresses.length; cntAddress++) {
            migrateOne(addresses[cntAddress]);
        }
    }

    function setPrice(uint256 _newPrice) public onlyOwner() {
        _price = _newPrice;
    }

    function setMaxPerTx(uint256 _newMaxPerTx) public onlyOwner() {
        maxPerTx = _newMaxPerTx;
    }

    function setPresaleReserved(uint256 _newReserved) public onlyOwner() {
        _presaleReserved = _newReserved;
    }

    function setGiftReserved(uint256 _newReserved) public onlyOwner() {
        _giftReserved = _newReserved;
    }

    function setMaxSupply(uint256 _newMax) public onlyOwner() {
        MAX_SUPPLY = _newMax;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function getPrice() public view returns (uint256){
        return _price;
    }

    function getDiscount() public view returns (uint256){
        return _botHolderDiscont;
    }

    function giveAway(address _to, uint256 _amount) external onlyOwner() {
        require( _amount <= _giftReserved, "Exceeds reserved gift Shrooms supply" );

        uint256 supply = totalSupply();
        for(uint256 i; i < _amount; i++){
            _safeMint( _to, supply + i );
        }

        _giftReserved -= _amount;
    }

    function giveAwayMany(address[] memory addresses) external onlyOwner() {
        require( addresses.length <= _giftReserved, "Exceeds reserved gift Bots supply" );

        for (uint i = 0; i < addresses.length; i++) {
            _safeMint(addresses[i], totalSupply());
        }

        _giftReserved -= addresses.length;
    }

    function pause(bool val) public onlyOwner {
        _paused = val;
    }

    function presalePause(bool val) public onlyOwner {
        _presalePaused = val;
    }
    
    function setDiscount(uint256 _newDiscount) public onlyOwner() {
        _botHolderDiscont = _newDiscount;
    }

    function withdrawAll() public payable onlyOwner {
        uint256 _balance = address(this).balance;

        require(payable(t1).send(_balance));
    }
}