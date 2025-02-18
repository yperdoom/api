import { Schema as _Schema, model } from 'mongoose'
const Schema = _Schema

const StockSchema = new Schema({
  name: {
    type: String, required: true
  },
  description: {
    type: String
  },
  quantity_in_stock: {
    type: Number,
    required: true
  },
  type_of_quantity: {
    type: String,
    required: true,
    enum: ['unit'],
    default: 'unit'
  },
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  id: false,
  versionKey: false
})

StockSchema.index({ name: 'text' }, { default_language: 'pt-br' })

export default model('stock', StockSchema)
