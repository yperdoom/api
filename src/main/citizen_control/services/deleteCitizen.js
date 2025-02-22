import Citizen from '../models/Citizen.js';

export default async function (citizenId) {
  const filter = {
    _id: citizenId
  }

  return Citizen.deleteOne(filter)
}
