import 'dotenv/config'
const {
  MONGO_ENDPOINT: mongo_endpoint
} = process.env

import { connect, disconnect } from './mongooseConfiguration.js'

const _connect = async () => {
  await connect({ mongo_endpoint })
}
export { _connect as connect }

const _disconnect = async () => {
  await disconnect({ mongo_endpoint })
}
export { _disconnect as disconnect }
