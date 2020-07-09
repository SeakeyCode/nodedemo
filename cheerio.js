// 爬虫
const orginRequest = require('request')
const cheerio = require('cheerio')
const iconv = require('iconv-lite')
const fs = require('fs')

function request(url, callback) {
  const option = {
    url: url,
    encoding: null
  }
  orginRequest(url, option, callback)
}


request('https://www.biquge9.cc/book/1270365484/1017531235.html', (err, res, body) => {
  const html = iconv.decode(body, 'utf-8')
  const $ = cheerio.load(html)
  fs.writeFile('./111.txt', $('#content').text(), 'utf-8', (err) => {
    // console.log(body.toString())
  })
})