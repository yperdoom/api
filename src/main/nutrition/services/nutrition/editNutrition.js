import Nutrition from '../../models/Nutrition.js';
import defaultMongoOperation from '../../../../database/mongo/defaultMongoOperation.js';

export default async function (nutritionId, document) {
  const filter = {
    _id: nutritionId
  }
  const payload = {
    $set: document
  }
  defaultMongoOperation.new = true

  return Nutrition.findOneAndUpdate(filter, payload, defaultMongoOperation)
}
