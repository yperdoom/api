import Order from '../models/Order.js';

export default async function (document) {
  return Order.create(document)
}
