const fireblocks = require("./service");

( async () => {
    const vaults = await fireblocks.getVaultAccounts()
    console.log(vaults)
})()