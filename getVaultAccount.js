const fireblocks = require("./service");


( async () => {
    const vaultAccount = await fireblocks.getVaultAccount("0");
    console.log(vaultAccount)
})()