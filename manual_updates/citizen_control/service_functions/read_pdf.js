import fs from 'fs';
import pdf from 'pdf-parse';

export default async function readPdf(caminhoArquivo) {
  try {
    const dataBuffer = fs.readFileSync(caminhoArquivo);
    const data = await pdf(dataBuffer);
    const paginas = data.text.split('\f');
    const dadosExtraidos = [];

    paginas.forEach(pagina => {
      const linhas = pagina.split('\n');

      for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i].trim();

        if (linha.includes('CPF')) {
          const firstLine = linhas[i].split('CPF:');
          const name = firstLine[0].trim();
          const cpf = firstLine[1].trim();
          const gender = linhas[i + 1].trim();
          const birthDate = linhas[i + 2].trim();
          let address = linhas[i + 4].trim();
          let phone = linhas[i + 5].trim();
          if (address.includes('meses')) {
            address = linhas[i + 5].trim();
            phone = linhas[i + 6].trim();
          }

          dadosExtraidos.push({
            name,
            cpf,
            gender,
            birthDate,
            address,
            phone,
          });
        }
        if (linha.includes('CNS')) {
          const firstLine = linhas[i].split('CNS:');
          const name = firstLine[0].trim();
          const cpf = firstLine[1].trim();
          const gender = linhas[i + 1].trim();
          const birthDate = linhas[i + 2].trim();
          let address = linhas[i + 4].trim();
          let phone = linhas[i + 5].trim();
          if (address.includes('meses')) {
            address = linhas[i + 5].trim();
            phone = linhas[i + 6].trim();
          }

          dadosExtraidos.push({
            name,
            cpf,
            gender,
            birthDate,
            address,
            phone,
          });
        }
      }
    });

    return dadosExtraidos;
  } catch (erro) {
    console.error('Erro ao processar o PDF:', erro);
    return null;
  }
}
