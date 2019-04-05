const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

function getDinosaurs(db = database) {
  return db('dinosaurs').select()
}

function getDinosaur(id, db = database) {
  return db('dinosaurs').where('id', id).first()
}

let quizAnswers = {
  'q1': 1,
  'q2': 2,
  'q3': 4,
  'q4': 4,
  'q5': 4
}

function getUserDino(quizAnswers, db = database) {
  let answerCounter = {
    'Tyrannosaurus Rex': 0,
    'Triceratops': 0,
    'Brachiosaurus': 0,
    'Barney': 0
  }

  //turn quizAnswers into an array 
  let quizAnswersArr = Object.keys(quizAnswers).map(function (key) {
    return quizAnswers[key];
  });

  console.log("quizAnswers: ", quizAnswers, " is a ", typeof quizAnswers)
  console.log("quizAnswersArr: ", quizAnswersArr, " is a ", typeof quizAnswersArr)

  //count up the answers or each dino
  quizAnswersArr.forEach(answer => {
    if (answer == 1) {
      answerCounter['Tyrannosaurus Rex']++
    }
    if (answer == 2) {
      answerCounter['Triceratops']++
    }
    if (answer == 3) {
      answerCounter['Brachiosaurus']++
    }
    if (answer == 4) {
      answerCounter['Barney']++
    }
  })

  console.log("answerCounter: ", answerCounter, " is a ", typeof answerCounter)

  //convert answerCounter into array
  let answerCounterArr = Object.keys(answerCounter).map(function (key) {
    return answerCounter[key];
  });
  console.log("answerCounterArr: ", answerCounterArr, " is a ", typeof answerCounterArr)

  //find the highest answer counter
  let highestAnswerTotal = Math.max.apply(null, answerCounterArr)
  console.log("The highest answer counter is: ", highestAnswerTotal)

  //find the dino with most answers
  let matchingDino = Object.keys(answerCounter).find(key => answerCounter[key] === highestAnswerTotal);

  console.log("The matching dinosaur is : ", matchingDino)

  //get facts by dinosaur
  return db('facts')
    .join('dinosaurs', 'facts.id', '=', 'dinosaurs.facts_id')
    .where('dinosaurs.name', '=', matchingDino)

}

getUserDino(quizAnswers)

module.exports = {
  getDinosaurs,
  getDinosaur,
  getUserDino
}