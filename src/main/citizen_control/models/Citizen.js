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

CitizenSchema.index({ cpf: 1 }, { unique: true })

export default model('citizen', CitizenSchema)