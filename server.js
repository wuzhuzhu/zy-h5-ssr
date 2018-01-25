const Koa = require('koa')
const next = require('next')
const serve = require('koa-static');
const routes = require('./routes')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
// const handle = app.getRequestHandler() // before next-router
const handler = routes.getRequestHandler(app) // next-router handler

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()

  server.use(serve(__dirname + '/.next'));

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(ctx => {
    ctx.respond = false
    ctx.res.statusCode = 200 // because koa defaults to 404
    handler(ctx.req, ctx.res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
