exports.up = function(knex, Promise) {
  return knex.schema.hasTable('facts').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('facts', function(t) {
        t.increments('id').primary();
        t.string('fact_1', 300);
        t.string('fact_2', 300);
        t.string('fact_3', 300);
        t.integer('dinosaur_id')
      });
    }
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('facts')
};
