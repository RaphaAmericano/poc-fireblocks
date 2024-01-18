require("dotenv").config()
const fs = require('fs');
const path = require('path');
const { FireblocksSDK, PeerType, TransactionArguments, TransactionOperation, TransactionStatus } = require('fireblocks-sdk');
const { exit } = require('process');
const { inspect } = require('util');

const apiSecret = fs.readFileSync(path.resolve("fireblocks_secret.key"), "utf8");

const apiKey = process.env.API_KEY
// Choose the right api url for your workspace type 
const baseUrl = process.env.BASE_URL
const fireblocks = new FireblocksSDK(apiSecret, apiKey, baseUrl);

module.exports = fireblocks