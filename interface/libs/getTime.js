const createDatetimeObject = require('./createDatetimeObject')

module.exports = () => {
  const time = createDatetimeObject.now()

  return time
}