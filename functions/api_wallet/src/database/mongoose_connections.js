'use strict'

require('dotenv/config')
const mongoose = require('mongoose')
const { MONGO_ENDPOINT } = process.env

let conn = null

module.exports = ({
  connect: async () => {
    if (conn == null) {
      try {
        conn = await mongoose.connect(MONGO_ENDPOINT)
      } catch (error) {
        // console.log(error)
        conn = null
      }
    }
  
    return conn
  },
  disconnect: async () => {
    try {
      return await mongoose.disconnect(MONGO_ENDPOINT)
    } catch (error) {
      console.log(error)
    }
  },
  is_object_id: (s) => {
    if (_verify_if_object_id(s)) {
      return mongoose.Types.ObjectId(String(s))
    }
  }
})

const _verify_if_object_id = (s) => {
  return mongoose.Types.ObjectId.isValid(s) && /^[0-9a-fA-F]{24}$/.test(s)
}