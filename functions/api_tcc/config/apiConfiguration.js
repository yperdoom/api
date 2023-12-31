const Logger = require('../src/api/loggerController')
Logger.trace('creating api file...', 'init')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const api = express()

Logger.trace('configuration api module...', 'init')
api.use(bodyParser.json())
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  api.use(cors())
  next()
})
api.use(
  bodyParser.urlencoded({
    extended: true
  })
)

module.exports = api
