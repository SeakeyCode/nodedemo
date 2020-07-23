const Koa = require('koa')
const app = new Koa()

// app.use(async (ctx, next) => {
//   await next()
//   const rt = ctx.response.get('X-Response-Time')
//   ctx.body = ctx.method + ctx.url + rt
// })

const static = require('koa-static') 
app.use(static(__dirname + '/public'))

const index = require('./router/index')
app.use(index.routes())

app.on('error', err => {
  throw err
})

app.listen(3001)