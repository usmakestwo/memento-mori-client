/* eslint-disable no-console */
const express = require('express')
const next = require('next')
const { join, resolve } = require('path')
const { parse } = require('url')
const compression = require('compression')
const { version } = require('./package.json')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })

const handle = app.getRequestHandler()
const port = process.env.PORT ? process.env.PORT : 3000

const ServiceWorker = _app => (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.set('Content-Type', 'application/javascript')
  const parsedUrl = parse(req.url, true)
  const { pathname } = parsedUrl
  const filePath = join(__dirname, '.next', pathname)
  if (dev) {
    console.log('dev - sw from static')
    _app.serveStatic(req, res, resolve('./static/service-worker.js'))
  } else {
    _app.serveStatic(req, res, filePath)
  }
}

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())

    server.get('/service-worker.js', ServiceWorker(app))
    // readiness & liveness probe endpoint
    server.get('/version', (req, res) => {
      res.json({ version })
    })

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
