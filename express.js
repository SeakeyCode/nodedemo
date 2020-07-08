const express = require('express')
const app = express()

app.all('*', (req, res, next) =>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next()
})

app.get('/', (req, res) => {
  res.end('111111111')
})

app.get('/user', (req, res) => {
  res.end(JSON.stringify({name: '11111'}))
})

app.listen(3000)