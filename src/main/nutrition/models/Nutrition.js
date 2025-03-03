import { Schema, model } from 'mongoose'

const NutritionSchema = new Schema({
  personaId: { type: Schema.Types.ObjectId, ref: 'persona', required: true },
  recommended_calories: { type: Number, required: true },
  recommended_carbos: { type: Number, required: true },
  recommended_proteins: { type: Number, required: true },
  recommended_lipids: { type: Number, required: true },
  recommended_water: { type: Number, required: true },
  meals: [
    {
      mealType: { type: String, required: true, enum: ['snack', 'lunchbox'] },
      weekday: { type: String, required: true, enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] },
      foods: [{ type: Schema.Types.ObjectId, ref: 'food' }]
    }
  ]
}, {
  timestamps: true,
  versionKey: false
})

export default model('nutrition', NutritionSchema)