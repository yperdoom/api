import Nutrition from '../../models/Nutrition.js';

export default async function (nutritionId) {
  const filter = {
    _id: nutritionId
  }

  return Nutrition.deleteOne(filter)
}
