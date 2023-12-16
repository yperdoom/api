const database = require('../utils/database')
const Media = require('../models/Media')

const createMedia = async (request, response) => {

  const isConnected = await database.connect()

  if (! isConnected) {
      return {
          statusCode: 500,
          body: { message : 'database_not_connected' }
      }
  }

  const media = await Media(request.body).save()
  response.send(media)
}

const listMedias = async (request, response) => {

  const isConnected = await database.connect()

  if (! isConnected) {
      return {
          statusCode: 500,
          body: { message : 'database_not_connected' }
      }
  }

  const medias = await Media.find()
  response.send(medias)
}

module.exports = {
  createMedia,
  listMedias
}