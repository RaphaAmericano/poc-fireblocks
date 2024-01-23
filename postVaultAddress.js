const fireblocks = require("./service");

( async () => {
    const address = await fireblocks.generateNewAddress("2", "ETH_TEST3", "Carteira Matic", "1");
    console.log(address)
})()