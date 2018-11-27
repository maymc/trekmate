
exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', function (table) {
    table.increments();
    table.string('activity_name').notNullable();
    table.string('activity_owner').notNullable();
    table.string('location').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.decimal('price').notNullable().defaultTo(0.00);
    table.string('type').notNullable();
    table.integer('votes').notNullable();
    table.string('reservation').notNullable();
    table.string('notes').notNullable();
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('activities');
}
