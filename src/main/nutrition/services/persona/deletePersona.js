import Persona from '../../models/Persona.js';

export default async function (personaId) {
  const filter = {
    _id: personaId
  }

  return Persona.deleteOne(filter)
}
