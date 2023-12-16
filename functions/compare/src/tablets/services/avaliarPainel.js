
module.exports = async (painel, resolucao, cores) => {
  let painelPontos = 0
  let resolucaoPontos = 0
  let coresPontos = 0

  if (painel === 'ips') {
    painelPontos = 1
  }
  if (painel === 'qled') {
    painelPontos = 2
  }

  if (resolucao === '3440x1440' || resolucao === '2560x1440') {
    resolucaoPontos = 1
  }

  if (cores.sRGB) {
    if (cores.sRGB == 95){
      coresPontos = 0.1
    }
    if (cores.sRGB == 99){
      coresPontos = 0.5
    }
    if (cores.sRGB == 117 || cores.sRGB == 120) {
      coresPontos = 1
    }
    if (cores.sRGB == 125) {
      coresPontos = 1.2
    }
    if (cores.sRGB == 128) {
      coresPontos = 1.5
    }
  }

  return {
    painel: painelPontos,
    resolucao: resolucaoPontos,
    cores: coresPontos
  }
}
