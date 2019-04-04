
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attributes').del()
    .then(function () {
      // Inserts seed entries
      return knex('attributes').insert([
        {id: 1, favourite_colour: 'red',favourite_food:'fried chicken',favourite_activity:'playing sports',favourite_place:'busy city',personality_type:'hyper',dinosaur_id:1},
        {id: 2, favourite_colour: 'blue',favourite_food:'sushi',favourite_activity:'watching tv',favourite_place:'bontanicla garderns',personality_type:'cool',dinosaur_id:2},
        {id: 3, favourite_colour: 'pink',favourite_food:'apple pie',favourite_activity:'making art',favourite_place:'up on a hill so I can see the view',personality_type:'kind',dinosaur_id:3},
        {id: 4, favourite_colour: 'purple',favourite_food:'chocolate',favourite_activity:'hanging out with friends',favourite_place:'back yard',personality_type:'fun',dinosaur_id:4}
      ]);
    });
};
