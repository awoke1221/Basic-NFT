
const { ethers } = require("hardhat");

describe("AZtoken NFT tests ", ()=>{
    let aZtoken;
    let add1;
    let add2;
    beforeEach(async ()=>{

        [ add1, add2] = await ethers.getSigners()
        const AZNFT = await ethers.getContractFactory("AZNFT")
        aZtoken = await AZNFT.deploy()
        await aZtoken.deployed()

    })

    it('should mint new NFT  ', async() => {
          await aZtoken.mintNFT()
                                                                                   
    });
})