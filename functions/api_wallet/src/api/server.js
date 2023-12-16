
require('dotenv/config')
const { API_PORT } = process.env

// import routes api
const api = require('./routes')

api.listen(API_PORT, () => {
  console.log(`Api rodando na porta: ${API_PORT}.`)
})
