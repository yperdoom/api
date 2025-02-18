// imports
import {
  getStockController,
  createStockController,
  editStockController,
  deleteStockController
} from '../controllers/stockController.js';

// routes
export default (api) => {
  api.get('/stock/:stock_id', getStockController)

  api.get('/stock', getStockController)

  api.post('/stock', createStockController)

  api.put('/stock/:stock_id', editStockController)

  api.delete('/stock/:stock_id', deleteStockController)
}
