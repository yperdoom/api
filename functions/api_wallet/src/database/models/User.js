'use strict'

const { model, Schema } = require('mongoose')

const userSchema = new Schema({
  name: String,
  email: String
},{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  id: false,
  versionKey: false
})

userSchema.index({name: 'text', email: 'text'})

module.exports = model('User', userSchema)
