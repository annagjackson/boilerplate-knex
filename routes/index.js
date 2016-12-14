var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  get: get,
  profile: profile
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function profile (req, res) {
  knex('profiles')
    .join('users', 'profiles.user_id', 'users.id')
    .select('users.name', 'profiles.image')
    .where('users.id', Number(req.params.id))
    .first()
    .then(function (userProfile) {
      var vm = {
        name: userProfile.name,
        image: userProfile.image
      }
      res.render('profile', vm)
    })
}
