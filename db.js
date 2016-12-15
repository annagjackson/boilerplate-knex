var express = require('express')
var environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
var connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile
}

function getUsers (testDb) {
  // Use a test database if one is passed in, or the connection defined above.
  var db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  var db = testDb || connection
  return db('users').where('id', id)
}


function getProfile (id, testDb) {
    var db = testDb || connection
    return db('profiles')
      .where('profiles.user_id', id)
      .join('users', 'profiles.user_id', '=', 'users.id')
      .select('users.name', 'profiles.image', 'users.email', 'users.id')
      .first()
}

// function getDataToUpdate (id, testDb) {
//   return knex('users')
//     .where('users.id', Number(req.params.id))
//     .update({
//       name: req.body.name,
//       email: req.body.email
//     })
// }
