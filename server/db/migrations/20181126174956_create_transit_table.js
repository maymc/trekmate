
exports.up = function (knex, Promise) {
  return knex.schema.createTable('transit', function (table) {
    table.increments();
    table.string('type', 15).notNullable();
    table.string('date', 30).notNullable();
    table.string('time', 10).notNullable();
    table.string('reservation', 50).notNullable();
    table.decimal('price', 1000).notNullable().defaultTo(0.00);
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
  return knex.schema.dropTable('transit');
}
