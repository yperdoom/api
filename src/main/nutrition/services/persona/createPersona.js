import Persona from '../../models/Persona.js';

export default async function (document) {
  return Persona.create(document)
}
