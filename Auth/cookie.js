const http = require('http')
http.createServer((req, res) => {
  res.setHeader('Set-Cookie', 'cx=aa')
  res.end('hellow cookie')
}).listen(3000)