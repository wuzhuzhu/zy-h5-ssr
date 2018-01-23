const Koa = require('koa')
const next = require('next')
const Router = require('koa-router')
const send = require('koa-send')
const { join } = require('path')
const serve = require('koa-static');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = new Koa()
  const router = new Router()

  server.use(serve(join(__dirname, '.next')))

  router.get('/a', async ctx => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query)
    ctx.respond = false
  })

  router.get('/b', async ctx => {
    await app.render(ctx.req, ctx.res, '/b', ctx.query)
    ctx.respond = false
  })

  router.get('/service-worker.js', async ctx => {
    const filePath = join(__dirname, '.next', '/service-worker.js')
    await send(ctx, filePath)
  })

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
