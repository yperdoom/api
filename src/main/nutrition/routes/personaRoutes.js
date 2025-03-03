// imports
import {
  getPersonaController,
  createPersonaController,
  editPersonaController,
  deletePersonaController
} from '../controllers/personaController.js';

// routes
export default (api) => {
  api.get('/persona/:persona_id', getPersonaController)

  api.get('/persona', getPersonaController)

  api.post('/persona', createPersonaController)

  api.put('/persona/:persona_id', editPersonaController)

  api.delete('/persona/:persona_id', deletePersonaController)
}
