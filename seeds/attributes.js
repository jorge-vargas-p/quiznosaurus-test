
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('attributes').del()
    .then(function () {
      // Inserts seed entries
      return knex('attributes').insert([
        {id: 1, favourite_colour: 'red',favourite_food:'meats',favourite_activity:'hunting',favourite_place:'USA',personality_type:'angry',dinosaur_id:'1'},
        {id: 2, favourite_colour: 'blue',favourite_food:'plants',favourite_activity:'stomping',favourite_place:'Canada',personality_type:'humble',dinosaur_id:'2'},
        {id: 3, favourite_colour: 'green',favourite_food:'leaves',favourite_activity:'eating',favourite_place:'Africa',personality_type:'chill',dinosaur_id:'3'},
        {id: 4, favourite_colour: 'purple',favourite_food:'lollies',favourite_activity:'singing',favourite_place:'school',personality_type:'happy',dinosaur_id:'4'}
      ]);
    });
};
