const getTime = require("../interface/libs/getTime")

module.exports.calculeWorkTime = (entrys, outputs) => {
  const { diference, diferenceList } = _calculeWorkTime(entrys, outputs)

  const inWork = _calculeInWorkTime(entrys, outputs)

  const diferenceTime = _calculeDayAllTime(inWork, diference, diferenceList)
  console.log(diferenceTime)
}

const _calculeWorkTime = (entrys, outputs) => {
  let diference = { horas: 0, minutos: 0 }
  let diferenceList = []

  for (let index = 0; index < entrys.length; index++) {
    if (outputs[index] && entrys[index]) {
      let minutos = outputs[index].minutos - entrys[index].minutos
      let horas = outputs[index].horas - entrys[index].horas

      if (minutos < 0) {
        horas -= 1
        minutos = 60 + minutos
      }
      const time = { horas, minutos }

      diferenceList.push(time)
      diference.horas += horas
      diference.minutos += minutos
      if (diference.minutos > 60) {
        diference.minutos -= 60
        diference.horas += 1
      }
    }
  }

  return { diference, diferenceList }
}

const _calculeInWorkTime = (entrys, outputs) => {
  let diference = { horas: 0, minutos: 0 }
  const timeNow = {
    horas: parseInt(getTime().toLocaleString({ hour: "numeric" })),
    minutos: parseInt(getTime().toLocaleString({ minute: "numeric" }))
  }

  if (entrys.length > outputs.length) {
    diference.horas = timeNow.horas - entrys[entrys.length - 1].horas
    diference.minutos = timeNow.minutos - entrys[entrys.length - 1].minutos
  }
  if (diference.minutos < 0) {
    diference.horas -= 1
    diference.minutos += 60
  }

  return diference
}

const _calculeDayAllTime = (inWork, diference, diferenceList) => {
  diferenceList.push(inWork)
  const result = {
    horas: inWork.horas + diference.horas,
    minutos: inWork.minutos + diference.minutos
  }

  if (result.minutos > 60) {
    result.minutos -= 60
    result.horas += 1
  }

  const resultWorkTime = {
    horas: result.horas - 9,
    minutos: Math.abs(result.minutos - 60)
  }

  let objToPlusWork = {
    'voce pode trabalhar hoje, apenas mais': resultWorkTime
  }

  if (result.horas >= 10) {
    resultWorkTime.horas = Math.abs(result.horas - 10),
      resultWorkTime.minutos = result.minutos
    objToPlusWork = {
      'voce trabalho mais que 10 horas hoje :O': 'descanse pls', 'voce trabalhou a mais': resultWorkTime
    }
  }

  return { 'periodos trabalhados': diferenceList, 'voce trabalhou hoje por': result, objToPlusWork }
}