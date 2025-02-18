// imports
import {
  getSeasonController,
  getStatisticsController,
  createSeasonController,
  editSeasonController,
  deleteSeasonController
} from '../controllers/seasonController.js';

// routes
export default (api) => {
  api.get('/season/:season_id', getSeasonController)

  api.get('/season', getSeasonController)

  api.get('/statistics', getStatisticsController)

  api.post('/season', createSeasonController)

  api.put('/season/:season_id', editSeasonController)

  api.delete('/season/:season_id', deleteSeasonController)
}
