// imports
import {
  getOrderController,
  createOrderController,
  editOrderController,
  deleteOrderController
} from '../controllers/orderController.js';

// routes
export default (api) => {
  api.get('/order/:order_id', getOrderController)

  api.get('/orders', getOrderController)

  api.post('/order', createOrderController)

  api.put('/order/:orders_id', editOrderController)

  api.delete('/order/:orders_id', deleteOrderController)
}
