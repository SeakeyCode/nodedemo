const jsonwebtoken = require('jsonwebtoken')
const secret = '123456'
const opt = {
  secret: 'jet',
  key: 'user'
}
const user = {
  username: 'abc',
  password: '222222'
}

const token = jsonwebtoken.sign({
  data: user,
  exp: Math.floor(Date.now()/1000) + (60*60)
}, secret)

// 生成token
console.log(token)

// 解码token
console.log(jsonwebtoken.verify(token, secret, opt))

