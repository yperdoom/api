import Persona from '../../models/Persona.js';
import defaultMongoOperation from '../../../../database/mongo/defaultMongoOperation.js';
defaultMongoOperation.limit = 10;
export default async function (filter, projection, queryOptions) {
  queryOptions = { ...defaultMongoOperation, ...queryOptions }

  return Persona.find(filter, projection, queryOptions)
} 