import Citizen from '../models/Citizen.js';
import defaultMongoOperation from '../../../database/mongo/defaultMongoOperation.js';
defaultMongoOperation.limit = 10;
export default async function (filter, projection, queryOptions) {
  queryOptions = { ...defaultMongoOperation, ...queryOptions }

  return Citizen.find(filter, projection, queryOptions)
} 