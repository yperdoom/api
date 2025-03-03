import { Schema, model } from 'mongoose'

const personaSchema = new Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  basalConsumption: { type: Number, required: true },
  gymDays: { type: Number, required: true },
  bodyFat: { type: Number },
  bmi: { type: Number },
  water_percentage: { type: Number },
  visceralFat: { type: Number },
  muscle: { type: Number },
  bone: { type: Number },
  protein_percentage: { type: Number },
}, {
  timestamps: true,
  versionKey: false
})

export default model('persona', personaSchema)