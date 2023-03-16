/**
 * Submission ILT-CC-02-BA
 * Achmad Ferdiansyah - C038DSX0726
 * 
 * Note: Please test it on postman and run the server with this command 'npm run start-dev'
 */

const routes = require('./routes')
const Hapi = require('@hapi/hapi')
const PORT = 3000
const HOST = 'localhost'

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: HOST,
    routes: {
      cors: {
        origin: ['*']
      }
    }
  })

  server.route(routes)

  await server.start()
  console.log(`Server is running in ${server.info.uri}`)
}

init()
