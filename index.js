require("dotenv").config()
const fs = require('fs');
const path = require('path');
const { FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus } = require('fireblocks-sdk');
const { exit } = require('process');
const { inspect } = require('util');

const apiSecret = fs.readFileSync(path.resolve("fireblocks_secret.key"), "utf8");

const apiKey = process.env.API_KEY
// Choose the right api url for your workspace type 
const baseUrl = process.env.BASE_URL
const fireblocks = new FireblocksSDK(apiSecret, apiKey, baseUrl);
(async () => {
    
    // const supportedAssets = await fireblocks.getSupportedAssets()
    // console.log(supportedAssets)


    // const avaxFeeAsset = await fireblocks.getFeeForAsset("AVAX_BSC")
    // console.log(avaxFeeAsset)

    const wallets = await fireblocks.getInternalWallets()
    console.log(wallets)

    for(const wallet of wallets ){
        const { assets } = wallet;
        assets.forEach(console.log)
    }
    
    // // Print vaults before creation
    // let vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});
    // console.log(inspect(vaultAccounts, false, null, true));

    // // Create vault account
    // const vaultCreation = await fireblocks.createVaultAccount("QuickStart_Vault");
    // console.log(inspect(vaultCreation, false, null, true));

    // // Print vaults after creation
    // vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});
    // console.log(inspect(vaultAccounts, false, null, true));

})()
// .catch((e)=>{
//     console.error(`Failed: ${e}`);
//     exit(-1);
// })