
exports.up = function (knex, Promise) {
  return knex.schema.createTable('accommodations', function (table) {
    table.increments();
    table.string('lodging_name', 255).notNullable();
    table.string('address', 100).notNullable();
    table.string('check_in_date', 30).notNullable();
    table.string('check_out_date', 30).notNullable();
    table.decimal('price', 100).notNullable().defaultTo(0.00);
    table.boolean('is_paid').notNullable();
    table.string('reservation_code', 50).notNullable();
    table.string('notes', 1000).notNullable();
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
  return knex.schema.dropTable('accommodations');
}
