'use strict'

module.exports = async (balances) => {
  let hours = 0
  let minutes = 0

  for (let balance of balances) {
    minutes += balance.minutes
    hours += balance.hours

    if (minutes > 60) {
      hours += 1
      minutes -= 60
    }
  }

  return {
    hours,
    minutes
  }
}
