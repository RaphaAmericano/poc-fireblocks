const fireblocks = require("./service");

( async () => {
    const depositAddresses = await fireblocks.getDepositAddresses("2", "MATIC_TEST3");
    console.log(depositAddresses)
})()