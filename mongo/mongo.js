(async () => {
  const { MongoClient: MongoDB } = require('mongodb')
  const client = new MongoDB(
    'mongodb://localhost:27017',
    {
      userNewUrlParer: true
    }
  )

  let ret = await client.connect() 
  const db = client.db('test1')
  const fruits = db.collection('fruits')
  await fruits.insertOne({name: '垃圾'})
  console.log(await fruits.findOne({name: '垃圾'}))
  await fruits.updateOne({name: '垃圾'}, {$set: {name: 55555}})
  console.log(await fruits.findOne({name: 55555}))
  await fruits.deleteMany({name: '垃圾'})
})()