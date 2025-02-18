
export async function getStockController(req, res, next) {

}

export async function createStockController(req, res, next) {
  const body = req.body

  const stock = await createStock(body)

  if (stock) {
    return res.send({
      success: true,
      message: "Carteira criada com sucesso",
      body: stock
    })
  }

  return res.send({
    success: false,
    message: "Não foi possível criar a carteira"
  })
}

export async function editStockController(req, res, next) {

}

export async function deleteStockController(req, res, next) {

}