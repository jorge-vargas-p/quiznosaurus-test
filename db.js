const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

function getDinosaurs(db = database) {
  console.log("All dinosaurs: " + db('dinosaurs').select())
  return db('dinosaurs').select()
}

function getDinosaur(id, db = database) {
  console.log("The dinosaur we want: ", db('dinosaurs').where('id', id).first())
  return db('dinosaurs').where('id', id).first()
}

getDinosaurs()
getDinosaur(1)

module.exports = {
  getDinosaurs,
  getDinosaur
}