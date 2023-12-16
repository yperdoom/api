
const reader = require('xlsx')
const fs = require('fs')
const { DateTime } = require('luxon')

const file = reader.readFile('./src/import/gastos_mensais.xlsx')

const sheets = file.SheetNames

const _escrever_arquivo = (name, document) => {
  fs.writeFile(`src/import/resultados/${name}.json`, JSON.stringify(document), (err) => {
    if (err) throw err;
    // console.log('Arquivo criado com sucesso!');
  })
}

for (let i=0; i<sheets.length; i++) {
  const data = reader.utils.sheet_to_json(file.Sheets[sheets[i]])

  const object = []
  data.forEach(res => {
    object.push(res)
  })
  _escrever_arquivo(`arquivo ${sheets[i]}`, object)
}

