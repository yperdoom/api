// imports
import {
  getNutritionController,
  createNutritionController,
  editNutritionController,
  deleteNutritionController
} from '../controllers/nutritionController.js';

// routes
export default (api) => {
  api.get('/nutrition/:nutrition_id', getNutritionController)

  api.get('/nutrition', getNutritionController)

  api.post('/nutrition', createNutritionController)

  api.put('/nutrition/:nutrition_id', editNutritionController)

  api.delete('/nutrition/:nutrition_id', deleteNutritionController)
}
