const koa = require('koa')
const router = require('koa-router')()
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new koa()

app.use(cors({
  credentials: true
}))

app.keys = ['some secret']

app.use(static(__dirname + '/'))
app.use(bodyParser())
app.use(session(app))

router.post('/login', async (ctx) =>{
  const { body } = ctx.request
  ctx.session.userinfo = body.username
  ctx.body = {
    message: '登陆成功'
  }
})

router.post('/logout', async (ctx) => {
  delete ctx.session.userinfo
  ctx.body = {
    message: '退出成功'
  }
})

router.get('/getUser', require('./auth'), async ctx => {
  ctx.body = {
    message: '获取用户信息成功'
  }
})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)