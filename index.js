const express = require('express')
const consign = require('consign')
const PORT = 3000
const app = express();

consign()
    .include('models')
    .then('middleware.js')
    .then('routes')
    .then('boot.js')
    .into(app);