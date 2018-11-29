
exports.up = function (knex, Promise) {
  return knex.schema.createTable('flights', (table) => {
    table.increments('id').primary();
    table.string('airlines').notNullable();
    table.string('departure_time').notNullable();
    table.string('arrival_time').notNullable();
    table.string('reservation_code').notNullable();
    table.integer('checked_in_baggage');
    table.string('price').notNullable();
    table.string('notes').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.integer('user_id')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    table.integer('trip_id')
      .references('id')
      .inTable('trips')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('flights');
}
