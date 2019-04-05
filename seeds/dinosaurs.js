
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dinosaurs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dinosaurs').insert([
        { id: 1, name: 'Tyrannosaurus Rex', image: '/images/t-rex.png', attributes_id: 1, facts_id: 1 },
        { id: 2, name: 'Triceratops', image: '/images/triceratops.png', attributes_id: 2, facts_id: 2 },
        { id: 3, name: 'Brachiosaurus', image: '/images/brachiosaurus.png', attributes_id: 3, facts_id: 3 },
        { id: 4, name: 'Barney', image: '/images/barney.png', attributes_id: 4, facts_id: 4 },
      ]);
    });
};
