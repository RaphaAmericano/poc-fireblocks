const fireblocks = require("./service");

( async () => {
    const vaultAccount = await fireblocks.createVaultAccount("teste-1", true )
    console.log(vaultAccount)
})()