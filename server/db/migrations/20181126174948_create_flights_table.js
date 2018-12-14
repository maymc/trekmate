
exports.up = function (knex, Promise) {
  return knex.schema.createTable('flights', (table) => {
    table.increments();
    table.string('airlines', 100).notNullable();
    table.string('departure_date', 50).notNullable();
    table.string('departure_time', 50).notNullable();
    table.string('arrival_date', 50).notNullable();
    table.string('arrival_time', 50).notNullable();
    table.string('reservation_code', 50).notNullable();
    table.integer('checked_in_baggage');
    table.decimal('price', 100).notNullable().defaultTo(0.00);
    table.string('notes', 1000).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    //Create the column then add foreign key
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');

    table.integer('trip_id').unsigned().notNullable();
    table.foreign('trip_id').references('id').inTable('trips');
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('flights');
}
