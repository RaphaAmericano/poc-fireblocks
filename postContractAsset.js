const fireblocks = require("./service");


const options = {method: 'POST', headers: {accept: '*/*', 'content-type': 'application/json'}};


( async () => {
    fetch('https://api.fireblocks.io/v1/contracts/0xf13Ce10739f73270Ee926a3098D18432Fafe871B/assetId', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    // const address = await fireblocks.generateNewAddress("2", "MATIC_TEST3");
    // console.log(address)
})()