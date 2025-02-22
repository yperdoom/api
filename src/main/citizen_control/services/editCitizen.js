import Citizen from '../models/Citizen.js';
import defaultMongoOperation from '../../../database/mongo/defaultMongoOperation.js';

export default async function (citizenId, document) {
  const filter = {
    _id: citizenId
  }
  const payload = {
    $set: document
  }
  defaultMongoOperation.new = true

  return Citizen.findOneAndUpdate(filter, payload, defaultMongoOperation)
}
