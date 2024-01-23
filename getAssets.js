const fireblocks = require("./service");


( async () => {
    const supportedAssets = await fireblocks.getSupportedAssets();
    const testNetAssets = supportedAssets.filter(({ id }) => id.includes("TEST"))
    console.log(testNetAssets)
})()