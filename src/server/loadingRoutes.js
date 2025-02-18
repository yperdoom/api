import { promises } from 'fs'
const { readdir } = promises
const routesDirectory = './src/main'

export async function loadingRouteFiles(api, files) {
  if (!files) {
    files = []
  }

  const listFiles = await readdir(routesDirectory)

  for (const folder of listFiles) {
    if (!folder.includes('.js')) {
      const folderFiles = await readdir(`${routesDirectory}/${folder}/routes`);

      for (const fileInFolder of folderFiles) {
        if (fileInFolder.includes('Routes')) {
          const routePath = `../main/${folder}/routes/${fileInFolder}`;
          console.log('routePath :: ', routePath)

          const module = await import(routePath);
          module.default(api);
        }
      }
    }
  }
  return api;
}
