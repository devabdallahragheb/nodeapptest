const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World  ssss')
})
app.get('/ready', function (req, res) {
    res.send('ready')
  })
  app.get('/will', function (req, res) {
    res.send('response done')
  })
  
  //test

app.listen(3000)
module.exports=app