const token = require('../../config/auth/functions/token_jwt')
const crypt = require('../../config/auth/functions/crypt_password')
const utils = require('../functions/utils_functions')
const user = require('../functions/user_functions')

module.exports = ({
  login: async (requisition, response, next) => {
    const body = requisition.body
  
    const fields = utils.verify_fields(body, [
      'email',
      'password'
    ])
    if (!fields.success) {
      return response.send(fields)
    }
  
    const user_founded = await user.get_by_email(body.email, 'password name email scope phone')
  
    if (!user_founded) {
      return response.send({
        success: false,
        message: 'Usuário não encontrado!'
      })
    }
  
    const pass = await crypt.comparePassword(body.password, user_founded.password)
  
    if (!pass) {
      return response.send({
        success: false,
        message: 'Senha incorreta!'
      })
    }
  
    const objectToTokenize = {
      user_id: user_founded._id,
      name: user_founded.name,
      email: user_founded.email,
      scope: user_founded.scope,
      phone: user_founded.phone
    }
  
    const token_jwt = token.create_token(objectToTokenize)
  
    return response.send({
      success: true,
      message: 'Login bem sucedido.',
      scope: user_founded.scope,
      user_Id: user_founded._id,
      token: token_jwt
    })
  }
})
