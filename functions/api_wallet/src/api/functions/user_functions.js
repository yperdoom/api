const User = require('../../database/models/User')

module.exports = ({
  create: async (document) => {
    return await User.create(document)
  },
  get_by_email: async (email, select) => {
    return await User.findOne({
      email
    }).select(select).lean()
  }
})