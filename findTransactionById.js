const { PeerType } = require('fireblocks-sdk');
const fireblocks = require("./service");

async function findTransactionId(txHash){ 
    const result = await fireblocks.getTransactionById('302fe63e-5b02-4e12-bb8a-2cb0e48bf158');
    // const result = await fireblocks.getTransactionByExternalTxId('0xa9059cbb000000000000000000000000c24fb738f4d89ccdceaab93f5fbc9062579eece70000000000000000000000000000000000000000000000000000000005f5e100');
    console.log(JSON.stringify(result, null, 2));
}
findTransactionId();