const fireblocks = require("./service");


( async () => {
    const transactions = await fireblocks.getTransactions();
    console.log(transactions)

})()