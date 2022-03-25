const app = require('../app')
// const {dbConnect} = require('../db/connection')

const PORT = process.env.PORT || 3000
// const DB_HOST = process.env.DB_HOST

// не удается получить доступ к монго, коннект отключен.
async function start() {
  try {
    // await dbConnect(DB_HOST)
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()