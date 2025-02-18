import Season from '../models/Season.js';

export default async function (document) {
  return Season.create(document)
}
