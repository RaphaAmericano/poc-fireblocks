const fireblocks = require("./service");


let result = null;

( async () => {
    const gasStationInfo = await fireblocks.getGasStationInfo("ETH_TEST3");
    console.log(gasStationInfo)
    // {
        // balance: {
        //     AVAX: '0',
        //     BNB_BSC: '0',
        //     AVAXTEST: '0',
        //     ETH: '0',
        //     BNB_TEST: '0',
        //     ETH_TEST3: '0',
        //     ETH_TEST5: '0',
        //     MATIC_POLYGON: '0',
        //     MATIC_POLYGON_MUMBAI: '0'
        // },
        // configuration: { gasThreshold: '0.005', gasCap: '0.01', maxGasPrice: null }
    // }

})()
