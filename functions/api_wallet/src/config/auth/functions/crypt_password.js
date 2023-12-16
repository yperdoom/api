'use strict'

require('dotenv/config')
const bcrypt = require('bcrypt')
const { SALT } = process.env

module.exports = ({
  hashPassword: async (password) => {
    return await bcrypt.hash(password, Number(SALT))
  },
  comparePassword: async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
  }
})
