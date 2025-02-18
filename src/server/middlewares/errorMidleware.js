const errorMidleware = (api) => {
  api.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.error(err.customMessage)
    console.error(err.stack)

    res.json({
      message: err.customMessage || 'Ocorreu um erro no servidor',
      error: err.message || 'Erro desconhecido'
    });
  });
}

export default errorMidleware