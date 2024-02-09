const fireblocks = require("./service");

( async () => {
    const vaultAsset = await fireblocks.createVaultAsset("2", "MATIC_TEST3");
    console.log(vaultAsset)
})()