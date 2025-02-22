import Citizen from '../models/Citizen.js';
import defaultMongoOperation from '../../../database/mongo/defaultMongoOperation.js';

export default async function (filter, projection) {
  defaultMongoOperation.limit = 10

  return Citizen.find(filter, projection, defaultMongoOperation)
} 