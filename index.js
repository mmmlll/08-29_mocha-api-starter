var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var tacosController = require('./controllers/tacos_controller')
var app = express()

mongoose.connect('mongodb://localhost/taco-api')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello')
})

app.use('/tacos', tacosController)

localhostport = 3000
var server = app.listen(process.env.PORT || localhostport)
console.log('Server UP at ' + localhostport)

// we export the running server so we can use it in testing
module.exports = server
