require("dotenv").config()
const { ethers } = require("hardhat")

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log(`the contract is deploying with address ${deployer.address}`)

  const AZtoken = await ethers.getContractFactory("AZNFT")
  const aZtoken = await AZtoken.deploy()

  await aZtoken.deployed()
  console.log(`AZtoke is deployed with the address ${aZtoken.address}`)
}

main().then(()=>process.exit(0))
.catch((error)=>{
  console.error(error)
  process.exit(1)
})