const fireblocks = require("./service");

( async () => {
    const gasStationInfo = await fireblocks.gasStationInfo("MATIC_TEST3");
    console.log(gasStationInfo)
})()