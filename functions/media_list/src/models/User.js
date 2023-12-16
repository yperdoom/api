const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AddressSchema = new Schema({
  rua: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  complemento: {
    type: String,
    required: false
  },
  numero: {
    type: Number,
    required: true
  },
  cep: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  pais: {
    type: String,
    required: true
  }
},
{
  _id: false
})

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  address: {
    type: AddressSchema,
    required: true
  }
},
{
  _id: true,
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

UserSchema.index({ name: 1 })
UserSchema.index({ cpf: 1 })
UserSchema.index({ phone: 1 })
UserSchema.index({ mail: 1 })
UserSchema.index({ created_at: 1 })
UserSchema.index({ updatedAt: 1 })

module.exports = mongoose.model('User', UserSchema)