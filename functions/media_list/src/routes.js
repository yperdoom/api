const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const apiController = require('./controllers/ApiController')
const mediaController = require('./controllers/MediaController')
const userController = require('./controllers/UserController')
const app = express()
const port = 3015

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
  app.use(cors())
  next()
})
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/ping', apiController.ping)
app.post('/medias', mediaController.createMedia)
app.get('/medias', mediaController.listMedias)
app.post('/users', userController.createUser)
app.get('/users', userController.listUsers)
app.get(`/users/{user_id}`, userController.getUser)

app.listen(port, () => {
    console.log(`Api rodando na porta: ${port}.`)
})