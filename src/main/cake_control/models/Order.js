import { Schema, model } from 'mongoose'

const OrderSchema = new Schema({
  description: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },
  type_of_quantity: {
    type: String,
    required: true,
    enum: ['unit'],
    default: 'unit'
  },
  date: {
    type: Date,
    required: true,
    index: true
  },
  // time: {
  //   type: Time
  // },
  // client_id: {
  //   type: Schema.Types.ObjectId,
  //   required: true
  // }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  id: false,
  versionKey: false
})

export default model('orders', OrderSchema)
