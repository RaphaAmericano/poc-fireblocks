const fireblocks = require("./service");
function createVaultAccounts( userName, assetId){
    
    fireblocks.createVaultAccount(userName).then((result) => {

        const vault = { 
            vaultName: result.name,
            vaultID: result.id 
        };
        fireblocks.createVaultAsset(Number(vault.vaultID), assetId).then((result) => {
            console.log(result)
            console.log("Vault Account Details:", vault);
            console.log("Wallet Asset Details for ", vault.vaultName,":", result);
        });
        

    });
    
 }

( () => {
    const result = createVaultAccounts( "Fulano de tal", "BTC_TEST");
})()