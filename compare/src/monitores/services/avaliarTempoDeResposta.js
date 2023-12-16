
module.exports = async (tempoDeResposta) => {
  if (tempoDeResposta === 1) {
    return 1
  }

  if (tempoDeResposta === 0.5) {
    return 2
  }

  return 0
}
