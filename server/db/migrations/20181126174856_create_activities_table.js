
exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', (table) => {
    table.increments();
    table.string('activity_name', 50).notNullable();
    table.string('location', 100).notNullable();
    table.string('date', 50).notNullable();
    table.string('time', 50).notNullable();
    table.decimal('price', 100).notNullable().defaultTo(0.00);
    table.string('type', 250).notNullable();
    table.integer('votes').notNullable();
    table.string('reservation', 50).notNullable();
    table.string('notes', 1000).notNullable();
    table.string('image', 1000).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    // table.integer('user_id')
    //   .references('id')
    //   .inTable('users')
    //   .onDelete('CASCADE')
    //   .onUpdate('CASCADE');

    // table.integer('trip_id')
    //   .references('id')
    //   .inTable('trips')
    //   .onDelete('CASCADE')
    //   .onUpdate('CASCADE');

    //Create the column then add foreign key
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');

    table.integer('trip_id').unsigned().notNullable();
    table.foreign('trip_id').references('id').inTable('trips');
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('activities');
}
