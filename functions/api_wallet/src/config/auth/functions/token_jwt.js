'use strict'

require('dotenv/config')
const jwt = require('jsonwebtoken')
const { AUTH_SECRET } = process.env

module.exports = ({
  create_token: (object_to_tokenize) => {
    return jwt.sign(object_to_tokenize, AUTH_SECRET)
  },
  decode_token: (token) => {
    return jwt.verify(token, AUTH_SECRET)
  }
})