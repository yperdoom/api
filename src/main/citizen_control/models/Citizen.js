import { Schema, model } from 'mongoose'

const CitizenSchema = new Schema({
  name: { type: String, required: true },
  cpf: { type: String, required: true },
  gender: { type: String, required: true },
  birthDate: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true }
}, {
  id: true,
  timestamps: true,
  versionKey: false
})

export default model('citizen', CitizenSchema)