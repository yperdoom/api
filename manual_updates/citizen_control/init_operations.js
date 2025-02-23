import readPdf from './service_functions/read_pdf.js';
import saveData from './service_functions/save_data.js';
const pdfPath = './manual_updates/citizen_control/pdf/acompanhamento-cidadaos-2025-02-11.pdf';

console.log('oi')
readPdf(pdfPath).then(dados => {
  if (dados && dados.length > 0) {
    saveData(dados);
    // console.log(JSON.stringify(dados, null, 2));
  }
}).catch(erro => {
  console.error(erro);
});