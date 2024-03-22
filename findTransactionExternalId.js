const { PeerType } = require('fireblocks-sdk');
const fireblocks = require("./service");

async function findTransactionExternalId(txHash){ 
    console.log(Date.now())
    const result = await fireblocks.getTransactions({
    //    after: Date.now(),
    //    assets: "TKO111_POLYGON_TEST_MUMBAI_7GXB",
    //    sourceWalletId: "71",
        // assets:"TKO111_POLYGON_TEST_MUMBAI_7GXB",
       sourceWalletId: 71, 
       
       sourceId: "ef14cc0d-c2fb-4a3f-bf64-3df4623160cd"
    });
    console.log(JSON.stringify(result, null, 2));
}
findTransactionExternalId();