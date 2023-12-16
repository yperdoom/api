
const avaliarMelhores = require('./avaliarMelhores')
const avaliarCustos = require('./avaliarCustos')
const reavaliar = require('./reavaliar')


module.exports = async (gerais, pontuacoes, monitores) => {
  const melhores = await avaliarMelhores(gerais, monitores)

  const { custoBeneficios, geraisCb } = await avaliarCustos(gerais, monitores)

  const monitoresReavaliados = await reavaliar(geraisCb, pontuacoes, monitores)

  return {
    melhores,
    custoBeneficios,
    monitoresReavaliados
  }
}
