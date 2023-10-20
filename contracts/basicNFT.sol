// SPDX-License-Identifier: MIT
pragma solidity >= 0.7.0 < 0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract AZNFT is ERC721 {
    uint256 tokenId =0;
    constructor() ERC721("AZtoken", "AZt"){
              
    }

    function mintNFT() public returns (uint256) {
         tokenId +=1;
        _mint(msg.sender, tokenId);
         return tokenId;

        
    }
}