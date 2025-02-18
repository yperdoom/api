/**
 * Initial file of API
 *
 * Arquives and configurations
 */

const Logger = require('../library/function/Logger')

// import and init libraryes
const { PORT = 4001 } = process.env

// import routes api
const api = require('./loadingRoutesFiles')

api.listen(PORT, () => {
  Logger.log({ message: `Api rodando na porta: ${PORT}.` })
})