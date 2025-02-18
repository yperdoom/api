'use strict'

// imports
const calculateDayTimeController = require('../controllers/calculateDayTimeController')

// routes
module.exports = (api) => {
  api.post('/timer/calculate_day', calculateDayTimeController)

  return api
}
