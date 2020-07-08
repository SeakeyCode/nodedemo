const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const { url } = req
  console.log(req.headers.cookie)
 //设置允许跨域的域名，*代表允许任意域名跨域
 res.setHeader("Access-Control-Allow-Origin","http://localhost:8080");
 //跨域允许的header类型
 res.setHeader("Access-Control-Allow-Headers","Content-type,Content-Length,Authorization,Accept,X-Requested-Width,X-Token");
 //跨域允许的请求方式
 res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
 //设置响应头信息
 res.setHeader("X-Powered-By",' 3.2.1')
 res.setHeader('Set-Cookie', 'koock1=123456')
 // 如果设置Credentials, "Access-Control-Allow-Origin"必需是要跨域的地址, 不能是*
 res.setHeader('Access-Control-Allow-Credentials', 'true')
 //让options请求快速返回
 if(req.method == "OPTIONS"){return res.end();}
 if (url === '/') {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.end('server Error')
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
     res.end(data)
  })
 } else if (url === '/user') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
      name: 'chen'
    }))
 }
})

server.listen(3000)