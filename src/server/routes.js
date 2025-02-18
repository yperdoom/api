// imports
import api from './config.js'
import { loadingRouteFiles } from './loadingRoutes.js'

// add authentication layer
// const { authentication } = require('../config/auth/authentication')
api.all('/*', (req, res, next) => {
  console.log('autentiquei, teu pai mamei')
  next()
})

export default api
export default async () => {
  const api = await loadingRouteFiles(api)

  return api;
}