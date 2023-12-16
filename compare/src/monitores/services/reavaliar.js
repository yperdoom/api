
module.exports = async (newGerais, pontuacoes, monitores) => {
  for (let i = 0; i < monitores.length; i++) {
    monitores[i].pontuacao = newGerais[i]
    monitores[i].pontos = pontuacoes[i]
  }

  return monitores
}
