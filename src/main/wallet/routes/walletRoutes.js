// imports
import getControllers from '../controllers/getController.js'
import createController from '../controllers/createController.js'
import putController from '../controllers/putController.js'
import deleteController from '../controllers/deleteController.js'

// routes
export default (api) => {
  api.get('/wallet/:wallet_id', getControllers)

  api.get('/wallet', getControllers)

  api.post('/wallet', createController)

  api.put('/wallet/:wallet_id', putController)

  api.delete('/wallet/:wallet_id', deleteController)
}
