module.exports = async (ctx, next) => {
  if (!ctx.session.userinfo) {
    ctx.body = {
      ok: 0,
      message: '用户未登陆'
    }
  } else {
    await next()
  }
}