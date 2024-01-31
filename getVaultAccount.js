const fireblocks = require("./service");


( async () => {
    const vaultAccount = await fireblocks.getVaultAccount("18");
    console.log(vaultAccount)
})()