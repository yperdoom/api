import Nutrition from '../../models/Nutrition.js';

export default async function (document) {
  return Nutrition.create(document)
}
