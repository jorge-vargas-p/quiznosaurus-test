const express = require('express')

const db = require('../db')

const router = express.Router()

let quizAnswers = {
  'q1': 1,
  'q2': 2,
  'q3': 4,
  'q4': 4,
  'q5': 4
}

router.get('/jendestest', (req, res) => {
  db.getUserDino(quizAnswers)
    .then(dinosaur => {
      console.log("Matching dino info: ", dinosaur)
      res.render('partials/jendestest', { dinosaur: dinosaur })
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
