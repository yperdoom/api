const database = require('../utils/database')
const User = require('../models/User')

const createUser = async (request, response) => {
  const isConnected = await database.connect()

  if (! isConnected) {
    response.send('database_not_connected')
  }

  const user = await User(request.body).save()
  response.send(user)
}

const listUsers = async (request, response) => {
  const isConnected = await database.connect()

  if (! isConnected) {
    response.send('database_not_connected')
  }

  const users = await User.find()
  response.send(users)
}

const getUser = async (request, response) => {
  const isConnected = await database.connect()

  if (! isConnected) {
    response.send('database_not_connected')
  }
  const { user_id } = request.params
  const user = await User.findOneById(user_id)
  response.send(user)
}


module.exports = {
  createUser,
  listUsers,
  getUser
}