const ping = async (request, response) => {
  response.send('pong')
}

module.exports = {
  ping,
}