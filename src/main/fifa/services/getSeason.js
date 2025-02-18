import Season from '../models/Season.js';
import defaultMongoOperation from '../../../database/mongo/defaultMongoOperation.js';

export default async function (filter, projection) {
  defaultMongoOperation.limit = 10

  return Season.find(filter, projection, defaultMongoOperation)
} 