const avaliarMelhores = require('./avaliarMelhores')

module.exports = async (gerais, monitores) => {

  for (let i = 0; i < monitores.length; i++) {
    const valor = 25000 / monitores[i].valor
    gerais[i] += valor
  }

  const custoBeneficios = await avaliarMelhores(gerais, monitores)

  return { custoBeneficios, geraisCb: gerais }
}
