
module.exports = async (pontuacao) => {
  let soma = 0

  if (pontuacao.curvatura) {
    soma += pontuacao.curvatura
  }
  if (pontuacao.tempoResposta) {
    soma += pontuacao.tempoResposta
  }
  if (pontuacao.taxaDeAtualizacao) {
    soma += pontuacao.taxaDeAtualizacao
  }
  if (pontuacao.painel) {
    if (pontuacao.painel.painel) {
      soma += pontuacao.painel.painel
    }
    if (pontuacao.painel.resolucao) {
      soma += pontuacao.painel.resolucao
    }
    if (pontuacao.painel.cores) {
      soma += pontuacao.painel.cores
    }
  }

  return soma
}
