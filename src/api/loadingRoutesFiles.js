'use strict'

// imports
let api = require('./inicialize')

// add authentication layer
// const { authentication } = require('../config/auth/authentication')
api.all('/*', (req, res, next) => {
  console.log('autentique, teu pai mamei')
  next()
})

const walletRoutes = require('../source/wallet/routes/walletRoutes')
const timerRoutes = require('../source/timer/routes/timerRoutes')

api = walletRoutes(api)
api = timerRoutes(api)

// const { readdir } = require('fs').promises
// const routesDirectory = './source'
// const loadingRouteFiles = async (files) => {
//   if (!files) {
//     files = []
//   }

//   const listFiles = await readdir(routesDirectory)
//   for (const folder of listFiles) {
//     if (!folder.includes('.js')) {
//       const folderFiles = await readdir(`${routesDirectory}/${folder}`)
//       for (const folderInFolder of folderFiles) {
//         if (folderInFolder.includes('routes')) {
//           const routeFile = await readdir(`${routesDirectory}/${folder}/${folderInFolder}`)
//           for (const file of routeFile) {
//             const req = require(`../source/${folder}/${folderInFolder}/${file}`)
//             api = req(api)
//           }
//         }
//       }
//     }
//   }
//   return api
// }

// loadingRouteFiles()

module.exports = api