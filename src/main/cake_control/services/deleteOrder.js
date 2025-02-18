import Order from '../models/Order.js';

export default async function (orderId) {
  const filter = {
    _id: orderId
  }

  return Order.deleteOne(filter)
}
