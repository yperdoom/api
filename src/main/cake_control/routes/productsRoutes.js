// imports
import {
  getProductController,
  createProductController,
  editProductController,
  deleteProductController
} from '../controllers/productController.js';
// routes
export default (api) => {
  api.get('/order/:order_id', getProductController)

  api.get('/orders', getProductController)

  api.post('/order', createProductController)

  api.put('/order/:orders_id', editProductController)

  api.delete('/order/:orders_id', deleteProductController)
}
