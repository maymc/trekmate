
exports.up = function (knex, Promise) {
  return knex.schema.createTable('flights', function (table) {
    table.increments();
    table.string('airlines').notNullable();
    table.string('departure_time').notNullable();
    table.string('arrival_time').notNullable();
    table.string('reservation_code').notNullable();
    table.integer('checked_in_baggage');
    table.decimal('price').notNullable().defaultTo(0.00);
    table.string('notes').notNullable();
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('flights');
}
