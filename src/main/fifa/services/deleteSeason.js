import Season from '../models/Season.js';

export default async function (seasonId) {
  const filter = {
    _id: seasonId
  }

  return Season.deleteOne(filter)
}
