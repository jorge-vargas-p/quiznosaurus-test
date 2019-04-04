exports.up = function(knex, Promise) {
  return knex.schema.hasTable('attributes').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('attributes', function(t) {
        t.increments('id').primary();
        t.string('favourite_colour', 100);
        t.string('favourite_food', 100);
        t.string('favourite_activity', 100);
        t.string('favourite_place', 100);
        t.string('personality_type', 100);
        t.integer('dinosaur_id')
      });
    }
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('attributes')
};
