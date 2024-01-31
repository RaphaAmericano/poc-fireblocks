const fireblocks = require("./service");

( async () => {
    const exchangeAccounts = await fireblocks.getExchangeAccounts();
    console.log(exchangeAccounts)
})()