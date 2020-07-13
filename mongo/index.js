const express = require('express')
const app = express()
const path = require('path')
const mongo = require('./db')

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'))
})

app.get('/api/user', async (req, res) => {
  const col = mongo.col('fruits')
  const data = await col.find().limit(4).toArray()
  res.json({
    status: 100,
    data
  })
})

app.listen(3000)