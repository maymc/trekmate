
exports.up = function (knex, Promise) {
  return knex.schema.createTable('transit', function (table) {
    table.increments();
    table.string('type').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('reservation').notNullable();
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('transit');
}
