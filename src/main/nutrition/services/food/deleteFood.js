import Food from '../../models/Food.js';

export default async function (foodId) {
  const filter = {
    _id: foodId
  }

  return Food.deleteOne(filter)
}
