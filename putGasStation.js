const fireblocks = require("./service");


( async () => {
    const transactions = await fireblocks.setGasStationConfiguration("0.0010", "0.02", "0.05", "ETH_TEST3")
    console.log(transactions)

    // const filtered = transactions.filter(({ source: { id }}) => id === "0")
    // console.log(filtered)
    // console.log("quantity",filtered.length)
    

})()