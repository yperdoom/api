// imports
import calculateDayTimeController from '../controllers/calculateDayTimeController.js'

// routes
export default (api) => {
  api.post('/timer/calculate_day', calculateDayTimeController)
}
