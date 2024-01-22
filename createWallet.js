const fireblocks = require("./service");
async function createNewWallet(vaultAccountId, assetId){
    const vaultAsset = await fireblocks.createVaultAsset(vaultAccountId, assetId);
    console.log(vaultAsset)
 }

( async () => {
    const result = await createNewWallet(3, "ETH_TEST3","END-USER#");
    console.log(result)
})()