const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()
app.use('/', express.static(path.resolve(__dirname, '../dist')))

app.use(bodyParser.json());


module.exports = app
