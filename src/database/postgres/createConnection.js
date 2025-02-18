const Logger = require('../../src/library/function/Logger')
const { Pool } = require('pg')

const {
  POSTGRES_HOST: pgHost,
  POSTGRES_USER: pgUser,
  POSTGRES_PASSWORD: pgPass,
  POSTGRES_DB: pgDB,
  POSTGRES_PORT: pgPort
} = process.env

const pool = new Pool({
  host: pgHost,
  user: pgUser,
  password: pgPass,
  database: pgDB,
  port: pgPort
})
const global = {}

module.exports.connect = async () => {
  if (global.connection) { // conexao já existe
    return global.connection.connect()
  }
  try {
    await pool.connect()
    global.connection = pool
    return pool.connect()
  } catch (error) {
    console.log('PGUSER: ', pgUser)
    console.log('PGHOST: ', pgHost)
    console.log('PGPASSWORD: ', pgPass)
    console.log('PGDATABASE: ', pgDB)
    console.log('PGPORT: ', pgPort)
    console.log(error)
    Logger.error({
      ...error,
      type: 'database-error',
      local: 'postgre-connect'
    })

    return null
  }
}

module.exports.close = async () => {
  try {
    delete global.connect
    return 'desconectado'
  } catch (error) {
    Logger.error({
      ...error,
      type: 'database-error',
      local: 'postgre-disconnect'
    })
  }
}