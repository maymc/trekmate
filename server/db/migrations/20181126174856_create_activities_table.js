
exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', (table) => {
    table.increments();
    table.string('activity_name', 100).notNullable();
    table.string('location', 100).notNullable();
    table.string('date', 100).notNullable();
    table.string('time', 100).notNullable();
    table.decimal('price', 100).notNullable().defaultTo(0.00);
    table.string('type', 250).notNullable();
    table.integer('votes').notNullable();
    table.string('reservation', 50).notNullable();
    table.string('notes', 1000).notNullable();
    table.string('image', 1000).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    //Create the column then add foreign key
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');

    table.integer('trip_id').unsigned().notNullable();
    table.foreign('trip_id').references('id').inTable('trips').onDelete('CASCADE');
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('activities');
}
