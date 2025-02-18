import Season from '../models/Season.js';
import defaultMongoOperation from '../../../database/mongo/defaultMongoOperation.js';

export default async function (seasonId, document) {
  const filter = {
    _id: seasonId
  }
  const payload = {
    $set: document
  }
  defaultMongoOperation.new = true

  return Season.findOneAndUpdate(filter, payload, defaultMongoOperation)
}
