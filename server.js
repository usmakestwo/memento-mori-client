/* eslint-disable no-console */
const express = require('express')
const next = require('next')
const compression = require('compression')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()
const port = process.env.PORT ? process.env.PORT : 3000

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    // Route all other urls to next "as is" - see note above about /next/ and /webpack/
    server.get('*', (req, res) => handle(req, res))

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
