const fireblocks = require("./service");


( async () => {
    const transactions = await fireblocks.getTransactions();
    console.log(transactions)

    // const filtered = transactions.filter(({ source: { id }}) => id === "0")
    // console.log(filtered)
    // console.log("quantity",filtered.length)
    

})()