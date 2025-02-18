'use strict'

// imports
const getControllers = require('../controllers/getController')
const createController = require('../controllers/createController')
const putController = require('../controllers/putController')
const deleteController = require('../controllers/deleteController')

// routes
module.exports = (api) => {
  api.get('/wallet/:wallet_id', getControllers)

  api.get('/wallet', getControllers)

  api.post('/wallet', createController)

  api.put('/wallet/:wallet_id', putController)

  api.delete('/wallet/:wallet_id', deleteController)

  return api
}
