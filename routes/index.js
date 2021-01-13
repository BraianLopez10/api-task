const Router = require('express').Router()
const RouterTask = require('../components/tasks/routes')

Router.use('/task', RouterTask)

module.exports = Router;