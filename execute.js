const { calculeWorkTime } = require("./common/timeServices");

const entryes = [{ horas: 8, minutos: 10 }, { horas: 13, minutos: 31 }, { horas: 18, minutos: 51 }]
const outputs = [{ horas: 12, minutos: 2 }, { horas: 17, minutos: 33 }, { horas: 20, minutos: 54 }]

calculeWorkTime(entryes, outputs)


// 03:52
// 04:02
// =====
// 07:54