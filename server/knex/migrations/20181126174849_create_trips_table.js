
exports.up = function (knex, Promise) {
  return knex.schema.createTable('trips', function (table) {
    table.increments();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('country').notNullable();
    table.string('start_date').notNullable();
    table.string('end_date').notNullable();
    table.integer('collaborators').notNullable();
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('trips');
}
