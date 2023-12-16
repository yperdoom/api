
module.exports = async (curvatura) => {
  if (curvatura) {
    if (curvatura === 1000) {
      return 2
    }
    if (curvatura === 1500) {
      return 1.5
    }
    if (curvatura === 1800) {
      return 1.2
    }
  }

  return 0
}
