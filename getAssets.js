const fireblocks = require("./service");


( async () => {
    const supportedAssets = await fireblocks.getSupportedAssets();
    // console.log(supportedAssets)
    supportedAssets.filter(({ id }) => id.includes("TEST")).forEach(console.log)
})()