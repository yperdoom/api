const mongoOperator = require('../../config/database/mongo/mongoOperator')
const model = 'info'

module.exports = ({
  create: async (document) => {
    return mongoOperator.new(model, document)
  },
  update: async (filter, document) => {
    return mongoOperator.put(model, filter, document)
  },
  getOne: async (filter, projection = '') => {
    return mongoOperator.getOne(model, filter, projection)
  },
  get: async (filter, projection = '') => {
    return mongoOperator.get(model, filter, projection)
  },
  getAll: async (query) => {
    return mongoOperator.getAll(query, model)
  },
  delete: async (filter) => {
    return mongoOperator.delete(model, filter)
  },

  initInfos: async () => {
    const infos = require('../../pre_save/infosMock.json')

    await mongoOperator.new(model, infos)
  },
})
