exports.up = function (knex, Promise) {
  return knex.schema.hasTable('dinosaurs').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('dinosaurs', function (t) {
        t.increments('id').primary();
        t.string('name', 100);
        t.string('image', 100);
        t.integer('attributes_id');
        t.integer('facts_id');
      });
    }
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('dinosaurs')
};