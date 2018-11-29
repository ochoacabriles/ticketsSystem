pragma solidity ^0.4.24;

import 'zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';    
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';


/*
TO-DO:
- Use SafeMath -
- Use Ownable -
- Send funds to a defined address (maybe the owner's) -
- Add events -
- Implement Token URIs (super.setTokenUri(_tokenId, _tokenUri))
*/

contract ticketsToken is ERC721Token, Ownable {

    using SafeMath for uint256;
    //Contract owner
    address private owner;
    //Maximum quantity of tokens per sale
    uint8 private maxPerSale;
    // Maximum quantity of token types
    uint256 private maxTokenTypes;
    // Maximum quantity of tokens to be minted per each tokenType
    uint256[] private caps;              
    // Rate in Wei per each tokenType
    uint256[] private rates;    
    //Counter of minted tokens for each tokenType
    mapping (uint256 => uint256) private totals;    
    //mapping of token type for each token ID
    mapping (uint256 => uint256) types;

    //saleToken event
    event saleTokenSuccess (
        uint256 quantity,
        uint256 tokenType,
        address indexed owner
    );

    //courtesyToken event
    event courtesyTokenSuccess (
        uint256 quantity,
        uint256 tokenType,
        address owner
    );

    constructor(string _name, string _symbol, uint256[] _caps, uint256[] _rates, uint8 _maxPerSale) public 
        ERC721Token(_name, _symbol) { 
            //revert if caps or rates are not correctly defined
            require(_caps.length == _rates.length, 'invalidCapsRatesLength');
            //revert if _maxPerSale is 0
            require(_maxPerSale > 0, 'invalidMaxPerSale');
            for (uint256 i = 0; i < _caps.length; i++ ){
                //revert if either cap or rate is 0 for any type of token
                require(_caps[i] > 0 && _rates[i] > 0, 'invalidCapRate');
            }
            maxTokenTypes = _caps.length;
            caps = _caps;
            rates = _rates;
            maxPerSale = _maxPerSale;
            owner = msg.sender;
        }

    //Mint & send _quantity ERC721 tokens to msg.sender if conditions are met
    function saleToken(uint256 _tokenType, uint256 _quantity) public payable {
        //revert if _quantity is 0
        require(_quantity > 0, 'invalidQuantity');
        //revert if _tokenType is invalid
        require(_tokenType < maxTokenTypes, 'invalidTokenType');
        //revert if _quantity is more than maximum allowed per sale
        require(_quantity <= maxPerSale, 'quantityOverMax');
        uint256 amountToPay = _quantity.mul(rates[_tokenType]);
        uint256 supplyIfMinted = totals[_tokenType] + _quantity;
        //revert if msg.value is not enough for purchase
        require(msg.value >= amountToPay, 'insufficientFunds');
        uint256 toRefund = msg.value.sub(amountToPay);
        //revert if cap is reached
        require( supplyIfMinted <= caps[_tokenType], 'soldOut');
        //mint all tokens if all conditions are met
        refundFunds(toRefund);
        transferFundsToOwner(amountToPay);
        for (uint8 i = 0; i < _quantity; i++) {
            mintUniqueToken(msg.sender, _tokenType);
            if (i == _quantity - 1) {
                emit saleTokenSuccess(_quantity, _tokenType, msg.sender);
            }
        }

    }

    function refundFunds(uint256 _toRefund) private {
        msg.sender.transfer(_toRefund);
    }

    function transferFundsToOwner(uint256 _amountToPay) private {
        owner.transfer(_amountToPay);
    }

    //mint & send _quantity ERC721 tokens to _to as ordered by the owner if conditions are met
    function courtesyToken(uint256 _tokenType, uint256 _quantity, address _to) public onlyOwner {
        //revert if _quantity is 0
        require(_quantity > 0, 'invalidQuantity');
        //revert if _tokenType is invalid
        require(_tokenType < maxTokenTypes, 'invalidTokenType');        
        uint256 supplyIfMinted = totals[_tokenType] + _quantity;
        //revert if cap is reached
        require( supplyIfMinted <= caps[_tokenType], 'soldOut');
        //mint all tokens if all conditions are met
        for (uint8 i = 0; i < _quantity; i++) {
            mintUniqueToken(_to, _tokenType);
            if (i == _quantity - 1) {
                emit courtesyTokenSuccess(_quantity, _tokenType, _to);
            }
        }
    }

    function mintUniqueToken(address _to, uint256 _tokenType) private { 
        totals[_tokenType]++;
        uint256 _tokenid = super.totalSupply() + 1;
        types[_tokenid] = _tokenType;
        super._mint(_to, _tokenid);
    }

    function checkRates(uint256 _tokenType) constant returns (uint256) {
        return rates[_tokenType];
    }

    function checkMaxPerSale() constant returns (uint8) {
        return maxPerSale;
    }

    function checkMaxTokenTypes() constant returns (uint256) {
        return maxTokenTypes;
    }

    function checkTokenType(uint256 _tokenId) constant returns (uint256) {
        return types[_tokenId];
    }

    function checkOwnedTokens(address _address) constant returns (uint256[]) {
        return ownedTokens[_address];
    }

    function checkCaps(uint256 _tokenType) constant returns (uint256) {
        return caps[_tokenType];
    } 

    function checkMinted(uint256 _tokenType) constant returns (uint256) {
        return totals[_tokenType];
    }

}