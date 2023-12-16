const monitoresJson = require('../mocks/monitores.json')

const avaliarCurvatura = require('../services/avaliarCurvatura')
const avaliarTempoDeResposta = require('../services/avaliarTempoDeResposta')
const avaliarTaxaDeAtualizacao = require('../services/avaliarTaxaDeAtualizacao')
const avaliarPainel = require('../services/avaliarPainel')
const somaPontuacao = require('../services/somaPontuacao')
const avaliarCustoBeneficio = require('../services/avaliarCustoBeneficio')
const escreverArquivo = require('../services/escreverArquivo')


module.exports = async () => {
  let pontuacoes = []
  let pontuacoesGerais = []

  for (let count = 0; count < monitoresJson.length; count++) {
    let pontuacao = {}
    const {
      curvatura,
      tempo_de_resposta,
      taxa_de_atualização,
      taxa_de_atualização_OC,
      painel,
      resolucao,
      cores
    } = monitoresJson[count]

    pontuacao.curvatura = await avaliarCurvatura(curvatura)
    pontuacao.tempoResposta = await avaliarTempoDeResposta(tempo_de_resposta)
    pontuacao.taxaDeAtualizacao = await avaliarTaxaDeAtualizacao(taxa_de_atualização, taxa_de_atualização_OC)
    pontuacao.painel = await avaliarPainel(painel, resolucao, cores)
    pontuacoesGerais.push(await somaPontuacao(pontuacao))
    pontuacoes.push(pontuacao)
  }

  const {
    melhores,
    custoBeneficios,
    monitoresReavaliados
  } = await avaliarCustoBeneficio(pontuacoesGerais, pontuacoes, monitoresJson)

  await escreverArquivo('tree bests', melhores)
  await escreverArquivo('tree bests delivery-price', custoBeneficios)
  await escreverArquivo('all', monitoresReavaliados)
}
