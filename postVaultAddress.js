const fireblocks = require("./service");

( async () => {
    const address = await fireblocks.generateNewAddress("18", "BTC_TEST");
    console.log(address)
})()