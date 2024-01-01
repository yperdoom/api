const getTime = require("./getTime")

module.exports = ({
  timeNowToUtcString: () => {
    const now = getTime()
    return now.toString()
  },
})