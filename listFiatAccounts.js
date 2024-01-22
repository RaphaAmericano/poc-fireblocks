const fireblocks = require("./service");

( async () => {
    const vaults = await fireblocks.getFiatAccounts()
    console.log(vaults)
})()