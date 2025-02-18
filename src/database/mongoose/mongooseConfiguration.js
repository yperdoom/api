import Logger from '../library/function/Logger.js';
import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

let conn = null;
/**
 * Connect to mongo db with mongoose
 * @param {Object} params 
 * @param {String} params.mongo_endpoint 
 * @returns 
 */
export async function connect({ mongo_endpoint }) {
  if (conn == null) {
    try {
      conn = await mongoose.connect(mongo_endpoint)
    } catch (error) {
      Logger.error({
        ...error,
        type: 'database-error',
        local: 'mongo-connect'
      })
      conn = null
    }
  }

  return conn
}

/**
 * Connect to mongo db with mongoose
 * @param {Object} params 
 * @param {String} params.mongo_endpoint 
 * @returns 
 */
export async function disconnect({ mongo_endpoint }) {
  try {
    await mongoose.disconnect(mongo_endpoint)
    conn = null
  } catch (error) {
    Logger.error({
      ...error,
      type: 'database-error',
      local: 'mongo-disconnect'
    })
  }
}
