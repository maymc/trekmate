
exports.up = function (knex, Promise) {
  return knex.schema.createTable('transit', function (table) {
    table.increments();
    table.string('type', 15).notNullable();
    table.string('date', 100).notNullable();
    table.string('time', 100).notNullable();
    table.string('reservation', 50).notNullable();
    table.decimal('price', 1000).notNullable().defaultTo(0.00);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    //Create the column then add foreign key
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');

    table.integer('trip_id').unsigned();
    table.foreign('trip_id').references('id').inTable('trips').onDelete('CASCADE');
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('transit');
}
