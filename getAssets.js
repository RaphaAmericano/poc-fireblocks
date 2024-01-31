const fireblocks = require("./service");
const fs = require("fs")

let result = null;

( async () => {
    const supportedAssets = await fireblocks.getSupportedAssets();
    // console.log(supportedAssets)
        

    await fs.writeFileSync("assets.json", JSON.stringify(supportedAssets), 'utf8')
    // const testNetAssets = supportedAssets.filter(({ id }) => id.includes("MATIC"))
    // const testNetAssets = supportedAssets.filter(({ contractAddress }) => contractAddress.includes("0xf13Ce10739f73270Ee926a3098D18432Fafe871B"))
    // console.log(testNetAssets)
})()
