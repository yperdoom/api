import Food from '../../models/Food.js';

export default async function (document) {
  return Food.create(document)
}
