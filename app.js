const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const route = require('./routes')
const { errorHandler, wrapwithBoom, routeNoFound } = require('./middlewares/errorHandlers')
//Middlwares
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

//Route
app.use('/api', route)
// Handle Route No found
app.use(routeNoFound)

app.use(wrapwithBoom)
app.use(errorHandler)

module.exports = app;