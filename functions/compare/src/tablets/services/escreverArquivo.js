const fs = require('fs')
const path = './src/monitores/resultados'

module.exports = async (name, data) => {
  fs.writeFile(`${path}/${name}.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('O arquivo foi criado!');
  });
}
