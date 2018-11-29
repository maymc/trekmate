
exports.up = function (knex, Promise) {
  return knex.schema.createTable('accommodations', function (table) {
    table.increments('id').primary();
    table.string('lodging_name').notNullable();
    table.string('address').notNullable();
    table.string('check_in_date').notNullable();
    table.string('check_out_date').notNullable();
    table.decimal('price').notNullable().defaultTo(0.00);
    table.boolean('is_paid').notNullable();
    table.string('reservation_code').notNullable();
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
  return knex.schema.dropTable('accommodations');
}
