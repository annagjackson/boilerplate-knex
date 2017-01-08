var express = require('express')

var db = require('../db')

module.exports = {
  get: get,
  getProfile: getProfile,
  newProfile: newProfile
}

function get (req, res) {
  db.getUsers()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfile (req, res) {
  db.getUser(req.body.name)
    // .then(function (){
    //   getBlogs(req, res)
    //   //console.log(user[0].picture)
    // })

    .then(function (user) {
      console.log(user)
      res.render('profile', user[0])
    })
    .catch(function (err) {
      res.status(500).send(err.message)
    })
}

// function getBlogs (req, res) {
//   db.getBlogs(req.body.name)
//     .then(function (result) {
//       var object = {
//         blogs: result
//       }
//       res.render('partials/bloglist', object)
//     })
//     .catch(console.error)
//   //db.getBlog(req.query.id)
// }

function newProfile (req, res) {
  var user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email
  }
  var profile = {
    user_id: req.body.id,
    picture: req.body.picture
  }
  db.newUser(user, profile)
    .then(function (){
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send(err.message)
    })
}
