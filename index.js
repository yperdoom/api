const junho = require('./junho.json')

const index = () => {
  const distinct = (value, index, self) => {
    return self.indexOf(value) === index
  }

  let categorias = []

  // for (let i = 0; i < junho.length; i++) {
  //   const categoria = junho[i].categoria
  //   categorias.push(categoria)
  // }

  // console.log(categorias.filter(distinct))


  for (let i = 0; i < junho.length; i++) {
    const percentage = {
      valor: junho[i].valor
    }

    categorias.push()
  }

}

index()