import { Schema, model } from 'mongoose'

const FoodSchema = new Schema({
  name: { type: String, required: true },
  portion: {
    type: String,
    enum: ['weight', 'unitary', 'volume'],
    required: true
  },
  portionValue: { type: Number, required: true },
  calories: { type: Number, required: true, },
  carbos: { type: Number, required: true, },
  proteins: { type: Number, required: true, },
  lipids: { type: Number, required: true, }
}, {
  timestamps: true,
  versionKey: false
})

export default model('food', FoodSchema)