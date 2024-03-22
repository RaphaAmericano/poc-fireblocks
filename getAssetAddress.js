const fireblocks = require("./service");

( async () => {
    const depositAddresses = await fireblocks.getDepositAddresses("0", "TKO111_POLYGON_TEST_MUMBAI_7GXB");
    console.log(depositAddresses)
})()