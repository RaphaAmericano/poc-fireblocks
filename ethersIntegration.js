require('dotenv').config();
const { FireblocksWeb3Provider,ChainId,ApiBaseUrl } = require("@fireblocks/fireblocks-web3-provider");
const fs = require('fs');
const path = require('path');
const ethers = require("ethers")
const apiSecret = fs.readFileSync(path.resolve('fireblocks_secret.key'), "utf8");
const apikey = process.env.FIREBLOCKS_API_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY
const eip1193Provider = new FireblocksWeb3Provider({
    apiBaseUrl: ApiBaseUrl.Sandbox,
    privateKey: apiSecret,
    apiKey: apikey,
    vaultAccountIds: '0',
    chainId: ChainId.POLYGON_TEST,
})
const provider = new ethers.providers.Web3Provider(eip1193Provider);

const CONTRACT_ADDRESS = "0x4200617D7520Be267E68B735CECC1c2fCf69c7d5"

(async() => {

    const myContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider.getSigner());
    console.log(myContract)
    // const spenderAddr = "<spender_address>"

    // 1 USDC to approve 
    // const amount = 1e6

    // Invoke approve method
    // const tx = await myContract.approve(
    //     spenderAddr,
    //     amount
    // )
   
    // console.log(JSON.stringify(tx, null, 2))

})().catch(error => {
    console.log(error)
});