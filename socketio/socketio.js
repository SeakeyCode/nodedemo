const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  socket.on('chatMessage', (msg) => {
    io.emit('chatMessage', msg)
  })
})

server.listen(3000)