const config = require('./config')
const EventEmitter = require('events').EventEmitter
const MongoClient = require('mongodb').MongoClient

class Mongodb {
  constructor(config) {
    this.conf = config
    this.emmiter = new EventEmitter()
    this.client  = new MongoClient(config.url, {useNewUrlParser: true})
    this.client.connect(err => {
      if (err) throw err
      this.emmiter.emit('connect')
    })
  }

  col(colName, dbName = config.dbName) {
    return this.client.db(dbName).collection(colName)
  }

  once(event, cb) {
    this.emmiter.once(event, cb)
  }
}

module.exports = new Mongodb(config)
