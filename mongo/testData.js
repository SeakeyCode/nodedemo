const mongodb = require('./db')
mongodb.once('connect', async () => {
  const col = mongodb.col('fruits')
  await col.deleteMany()
  await col.insertMany([
    {name: 1},
    {name: 2},
    {name: 3},
    {name: 4}
  ])
})