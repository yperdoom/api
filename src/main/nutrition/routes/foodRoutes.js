// imports
import {
  getFoodController,
  createFoodController,
  editFoodController,
  deleteFoodController
} from '../controllers/foodController.js';

// routes
export default (api) => {
  api.get('/food/:food_id', getFoodController)

  api.get('/food', getFoodController)

  api.post('/food', createFoodController)

  api.put('/food/:food_id', editFoodController)

  api.delete('/food/:food_id', deleteFoodController)
}
