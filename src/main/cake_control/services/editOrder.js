import Order from '../models/Order.js';
import defaultMongoOperation from '../../../database/mongo/defaultMongoOperation.js';

export default async function (orderId, document) {
  const filter = {
    _id: orderId
  }
  const payload = {
    $set: document
  }
  defaultMongoOperation.new = true

  return Order.findOneAndUpdate(filter, payload, defaultMongoOperation)
}
