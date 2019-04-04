const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/jendestest', (req, res) => {
  db.getDinosaurs()
    .then(dinosaurs => {
      res.render('partials/jendestest', { dinosaurs: dinosaurs })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', { users: users })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
