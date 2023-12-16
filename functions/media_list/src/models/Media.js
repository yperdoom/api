const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MediaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  concluido: {
    type: Boolean,
    required: true
  },
  favorito: {
    type: Boolean,
    required: true
  },
  minutos_episodio: {
    type: Number,
    required: true
  },
  quantidade_episodios: {
    type: Number,
    required: true
  },
  quantidade_assistidos: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
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

MediaSchema.index({ user: 1 })
MediaSchema.index({ name: 1 })
MediaSchema.index({ concluido: 1 })
MediaSchema.index({ favorito: 1 })
MediaSchema.index({ updated_at: 1 })
MediaSchema.index({ created_at: 1 })


module.exports = mongoose.model('Media', MediaSchema)