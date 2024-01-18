const fireblocks = require("./service");


( async () => {
    const vaultAccounts = await fireblocks.getVaultAccountsWithPageInfo({});
    console.log(vaultAccounts)
    const { accounts } = vaultAccounts;
    // accounts.forEach((a) => console.log(a.assets))

})()