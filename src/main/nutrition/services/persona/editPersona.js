import Persona from '../../models/Persona.js';
import defaultMongoOperation from '../../../../database/mongo/defaultMongoOperation.js';

export default async function (personaId, document) {
  const filter = {
    _id: personaId
  }
  const payload = {
    $set: document
  }
  defaultMongoOperation.new = true

  return Persona.findOneAndUpdate(filter, payload, defaultMongoOperation)
}
