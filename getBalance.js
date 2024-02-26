const fireblocks = require("./service");

( async () => {
    const balance = await fireblocks.getVaultAccountAsset("0", "TKO111_POLYGON_TEST_MUMBAI_7GXB");
    console.log(balance)
})()