// imports
import bodyParserPkg from 'body-parser'
const { json, urlencoded } = bodyParserPkg
import express from 'express'
import cors from 'cors'
const api = express()

api.use(json())
api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  api.use(cors())
  next()
})
api.use(
  urlencoded({
    extended: true
  })
)

export default api