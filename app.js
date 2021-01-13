const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require('./routes')

//Middlwares
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

//Route
app.use('/api', route)

module.exports = app;