var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

var db = require('../db')

module.exports = {
  get: get,
  getProfilePage: getProfilePage,
  updateProfile: updateProfile,
  getConfirmation: getConfirmation,
  postConfirmation: postConfirmation
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

function getProfilePage (req, res) {
    db.getProfile(req.params.id)
      .then(function (profile) {
        var vm = {
          name: profile.name,
          email: profile.email,
          image: profile.image,
          id: profile.id
        }
        res.render('profile', vm)
      })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function updateProfile (req,res) {
  return knex('users')
    .where('users.id', Number(req.params.id))
    .update({
      name: req.body.name,
      email: req.body.email
    })
    .then(function (id) {
      return knex('profiles')
        .update({
          image: req.body.image
       })
    })
    .then(function () {
      res.redirect('/')
    })
}

function getConfirmation (req, res) {
  return knex('users')
  .select('users.name', 'users.id')
  .where('users.id', Number(req.params.id))
  .first()
  .then(function (userProfile){
    var vm = {
      name: userProfile.name,
      id: userProfile.id
    }

  res.render('confirmation', vm)
  })
    .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}


function postConfirmation (req, res) {
  knex ('users')
  .where('users.id', Number(req.params.id))
  .del()
  .then(function() {
    knex('profiles')
    .where('profiles.user_id', Number(req.params.id))
    .del()
  })
    res.redirect('/')
}
