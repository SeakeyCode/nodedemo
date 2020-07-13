const EventEmitter = require('events').EventEmitter
const event = new EventEmitter()
event.on('some_event', res => {
  console.log(res)
})

setInterval(() => {
  event.emit('some_event', new Date())
}, 1000)