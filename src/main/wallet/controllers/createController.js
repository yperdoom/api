'use strict'

const createWallet = require("../functions/createWallet")

module.exports = async (requisition, response, next) => {
  const body = requisition.body

  body.created_at = new Date()
  body.updated_at = new Date()

  const wallet = await createWallet(body)

  if (wallet) {
    return response.send({
      success: true,
      message: "Carteira criada com sucesso",
      body: wallet
    })
  }

  return response.send({
    success: false,
    message: "Não foi possível criar a carteira"
  })
}
