import 'dotenv/config';
const { PORT } = process.env;

import api from './config.js'
import { loadingRouteFiles } from './loadingRoutes.js'

import errorMiddleware from './middlewares/errorMidleware.js'

async function initServer() {

  await loadingRouteFiles(api)
  errorMiddleware(api)

  api.listen(PORT, () => {
    console.log(`server up with port ${PORT}`);
  });
}

initServer()