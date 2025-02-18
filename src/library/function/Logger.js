import { purple, yellow, green, blue, red } from '../enums/terminalColors.js'

export default ({
  trace: async (message, locale = 'init-route') => {
    if (locale === 'start') {
      console.log(purple, message)
    }
    if (locale === 'init') {
      console.log(yellow, message)
    }
    if (locale === 'init-route') {
      console.log(green, message)
    }
    if (locale === 'end') {
      console.log(blue, message)
    }
  },
  log: async (log) => {
    const type = blue

    if (log.message) { print('message: ' + log.message, type) }
    if (log.type) { print('type: ' + log.type, type) }
    if (log.local) { print('local: ' + log.local, type) }
    if (log.body) { print('body: ' + log.body, type) }
  },
  error: async (error) => {
    const type = red

    if (error.message) { print('message: ' + error.message, type) }
    if (error.type) { print('type: ' + error.type, type) }
    if (error.local) { print('local: ' + error.local, type) }
    if (error.code) { print('code: ' + error.code, type) }
    if (error.address) { print('address: ' + error.address, type) }
    if (error.detail) { print('detail: ' + error.detail, type) }
  },
})

const print = (message, type) => {
  console.log(type, message)
}