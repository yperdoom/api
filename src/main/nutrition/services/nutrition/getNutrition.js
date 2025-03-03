import Nutrition from '../../models/Nutrition.js';
import defaultMongoOperation from '../../../../database/mongo/defaultMongoOperation.js';
defaultMongoOperation.limit = 10;
export default async function (filter, projection, queryOptions) {
  queryOptions = { ...defaultMongoOperation, ...queryOptions }

  return Nutrition.find(filter, projection, queryOptions)
} 