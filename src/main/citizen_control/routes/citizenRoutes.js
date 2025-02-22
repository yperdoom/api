// imports
import {
  getCitizenController,
  createCitizenController,
  editCitizenController,
  deleteCitizenController
} from '../controllers/citizenController.js';

// routes
export default (api) => {
  api.get('/citizen/:citizen_id', getCitizenController)

  api.get('/citizen', getCitizenController)

  api.post('/citizen', createCitizenController)

  api.put('/citizen/:citizen_id', editCitizenController)

  api.delete('/citizen/:citizen_id', deleteCitizenController)
}
