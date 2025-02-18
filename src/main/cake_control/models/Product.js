import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  variations: {
    type: [String],
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  id: false,
  versionKey: false
})

export default model('products', ProductSchema)
