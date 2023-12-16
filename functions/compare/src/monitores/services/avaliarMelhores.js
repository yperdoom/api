
module.exports = async (gerais, monitores) => {
  let resultados = { theBest: {}, secondBest: {}, thirdBest: {} }
  let posicoes = { first: 0, second: 0, third: 0 }
  let primeiro = 0
  let segundo = 0
  let terceiro = 0

  for (let i = 0; i < gerais.length; i++) {

    if (gerais[i] > terceiro) {
      if (gerais[i] > segundo) {
        if (gerais[i] > primeiro) {
          terceiro = segundo
          resultados.thirdBest = resultados.secondBest
          posicoes.third = posicoes.second

          segundo = primeiro
          resultados.secondBest = resultados.theBest
          posicoes.second = posicoes.first

          primeiro = gerais[i]
          resultados.theBest = monitores[i]
          resultados.theBest.pontuacao = gerais[i]
          posicoes.first = i
        } else {
          terceiro = segundo
          resultados.thirdBest = resultados.secondBest
          posicoes.third = posicoes.second

          segundo = gerais[i]
          resultados.secondBest = monitores[i]
          resultados.secondBest.pontuacao = gerais[i]
          posicoes.second = i
        }
      } else {
        terceiro = gerais[i]
        resultados.thirdBest = monitores[i]
        resultados.thirdBest.pontuacao = gerais[i]
        posicoes.third = i
      }
    }
  }

  return resultados
}
