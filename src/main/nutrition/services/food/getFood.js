import Food from '../../models/Food.js';
import defaultMongoOperation from '../../../../database/mongo/defaultMongoOperation.js';
defaultMongoOperation.limit = 10;
export default async function (filter, projection, queryOptions) {
  queryOptions = { ...defaultMongoOperation, ...queryOptions }

  return Food.find(filter, projection, queryOptions)
} 