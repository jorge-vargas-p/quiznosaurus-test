
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('facts').del()
    .then(function () {
      // Inserts seed entries
      return knex('facts').insert([
        { id: 1, fact_1: 'The Tyrannosaurus had a life span of around 30 years.', fact_2: 'It lived in North America in river valleys and forests.', fact_3: 'It could probably eat as much as 500 pounds of meat in a single bite.', dinosaur_id: 1 },
        { id: 2, fact_1: 'Triceratops means three-horned-face in Greek.', fact_2: 'It probably wasn\'t a very fast dinosaur.', fact_3: 'Some triceratops may have had as many as 800 teeth!', dinosaur_id: 2 },
        { id: 3, fact_1: 'It is estimated that Brachiosaurus ate between 200 and 400 kilograms (440 and 880 pounds) of plants every day!', fact_2: 'The Brachiosaurus was a herbivore (plant eater), that feed on foliage high above the ground.', fact_3: 'The length of Brachiosaurus is believed to have been around 26 metres (85 feet).', dinosaur_id: 3 },
        { id: 4, fact_1: 'Barney likes many different foods such as fruits and vegetables, but his main favorite is a peanut butter and jelly sandwich with a glass of milk.', fact_2: 'He also loves marching bands and parades.', fact_3: 'Barney is a T-Rex', dinosaur_id: 4 }
      ]);
    });
};
