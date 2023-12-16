
const user = require('../managements/user_management')

module.exports = (api) => {

  api.post('/user', user.create)
  
  return api
}