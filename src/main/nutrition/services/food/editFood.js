import Food from '../../models/Food.js';
import defaultMongoOperation from '../../../../database/mongo/defaultMongoOperation.js';

export default async function (foodId, document) {
  const filter = {
    _id: foodId
  }
  const payload = {
    $set: document
  }
  defaultMongoOperation.new = true

  return Food.findOneAndUpdate(filter, payload, defaultMongoOperation)
}
