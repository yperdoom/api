const Pool = require('pg-promise')()
const pool = Pool('postgres://postgres:droot@localhost:5432/usuarios')
const { DateTime } = require('luxon')

const getUsers = async (request, response) => {
  var result = {}
  try{
    result = await pool.query('SELECT * FROM users ORDER BY id ASC')
  } catch(error){
    response.status(400).send(`Não foi possível listar usuários -> ${error}`)
    return
  }
  response.status(200).json(result)
}

const getUserById = async (request, response) => {
  const id = parseInt(request.params.id)
  var result = {}
  try{
    result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  } catch(error){
    response.status(400).send(`Não foi possível listar o usuário -> ${error}`)
    return
  }
  response.status(200).json(result)
}

const createUser = async (request, response) => {
  const { name, birth_date, document, address, fone, marital_state, spouse_name } = request.body
  const created_on = DateTime.now()
  // const created_on = date.day + '/' + date.month + '/' + date.year
  try{
    await pool.query('INSERT INTO users (name, birth_date, document, address, fone, marital_state, spouse_name, created_on) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name, birth_date, document, address, fone, marital_state, spouse_name, created_on])
  } catch(error){
    response.status(400).send(`Não foi possível criar usuário -> ${error}`)
    return
  }
  response.status(201).send(`Usuário ${name} adicionado.`)
}

const updateUser = async (request, response) => {
  const id = parseInt(request.params.id)
  const { name, birth_date, document, address, fone, marital_state, spouse_name } = request.body
  try{
    await pool.query(
      'UPDATE users SET name = $1, birth_date = $2, document = $3, address = $4, fone = $5, marital_state = $6, spouse_name = $7 WHERE id = $8',
      [name, birth_date, document, address, fone, marital_state, spouse_name, id])
  } catch(error){
    response.status(400).send(`Não foi possível atualizar usuário: ${error}`)
    return
  }
  response.status(200).send(`Usuário modificado com ID: ${id}`)

}

const deleteUser = async (request, response) => {
  const id = parseInt(request.params.id)

  try{
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id])
  } catch(error){
    response.status(400).send(`Não foi possível deletar usuário: ${error}`)
    return
  }
  response.status(200).send(`Usuário deletado com ID: ${id}`)
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
