'use strict'

const token_jwt = require('./functions/token_jwt')

module.exports = ({
  authentication: (requisition, response, next) => {
    const token = requisition.headers.authorization
    
    if (!token) {
      return response.send({
        success: false,
        message: 'token not found'
      })
    }
    requisition.auth = token_jwt.decode_token(token.replace('Bearer ', ''))
    
    if (!requisition.auth) {
      return response.send({ success: false, message: 'Invalid token' })
    }
    
    next()
  }
})