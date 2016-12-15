var path = require('path')

var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')

var index = require('./routes/index')

var server = express()

module.exports = server

// Middleware

server.engine('hbs', hbs({extname: 'hbs', defaultLayout: "main.hbs"}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(bodyParser.urlencoded({ extended: true }))
server.use(express.static('public'))

// Routes

server.get('/', index.get)
server.get('/profile/:id', index.getProfilePage)
server.post('/profile/:id', index.updateProfile)
server.get('/profile/confirm/:id', index.getConfirmation)
server.post('/profile/confirm/:id', index.postConfirmation)
