
module.exports = async (taxaDeAtualizacao, taxaDeAtualizaçãoOC) => {
  let OC = 0

  if (taxaDeAtualizaçãoOC) {
    OC = 0.5
  }

  if (taxaDeAtualizacao === 144) {
    return 1 + OC
  }

  if (taxaDeAtualizacao === 160 || taxaDeAtualizacao === 165) {
    return 1.2 + OC
  }

  if (taxaDeAtualizacao > 200) {
    return 1.5 + OC
  }

  return 0
}
