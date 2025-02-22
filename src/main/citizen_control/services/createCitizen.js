import Citizen from '../models/Citizen.js';

export default async function (document) {
  return Citizen.create(document)
}
