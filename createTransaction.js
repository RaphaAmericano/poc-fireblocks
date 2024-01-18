const { PeerType } = require('fireblocks-sdk');
const fireblocks = require("./service");

async function createTransaction(assetId, amount, srcId, destId){ 
    let payload = {
        assetId,
        amount,
        source: {
            type: PeerType.VAULT_ACCOUNT,
            id: String(srcId)
        },
        destination: {
            type: PeerType.VAULT_ACCOUNT,
            id: String(destId)
        },
        note: "Your first transaction!"
    };
    const result = await fireblocks.createTransaction(payload);
    console.log(JSON.stringify(result, null, 2));
}
createTransaction("ETH_TEST3", "0.00001", "0", "1");