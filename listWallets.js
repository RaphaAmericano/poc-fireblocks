const fireblocks = require("./service");

( async () => {
    const vaults = await fireblocks.getAssetWallets()
    console.log(vaults)
})()