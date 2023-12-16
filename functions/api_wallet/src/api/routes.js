let api = require('./api')

// import controllers and auth
const { authentication } = require('../config/auth/authentication')
const login_management = require('./managements/login_management')

const { readdir } = require('fs').promises
const routesDirectory = './src/api/routes'

api.post('/login', login_management.login)
api.all('/*', authentication)

const loadingRouteFiles = async (files) => {
  if (!files) {
    files = []
  }

  const listFiles = await readdir(routesDirectory)
  for (const file of listFiles) {
    const fileImport = require(`./routes/${file}`)
    api = fileImport(api)
  }
  return listFiles
}

loadingRouteFiles()

module.exports = api
