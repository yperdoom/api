module.exports = async (generation, params) => {
  let lastPosition = 0

  generation[0].rouletteRange = [0, (1 / generation[0].fitness)]
  lastPosition = (1 / generation[0].fitness)

  for (let i = 1; i < params.SIZE_GENERATION; i++) {
    generation[i].rouletteRange = [lastPosition, (1 / generation[i].fitness)]
    lastPosition = (1 / generation[i].fitness)
  }

  return {
    generation,
    lastPosition
  }
}
