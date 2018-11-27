
exports.up = function (knex, Promise) {
  return knex.schema.createTable('accomodations', function (table) {
    table.increments();
    table.string('lodging_name').notNullable();
    table.string('address').notNullable();
    table.string('check_in_date').notNullable();
    table.string('check_out_date').notNullable();
    table.decimal('price').notNullable().defaultTo(0.00);
    table.boolean('is_paid');
    table.string('reservation_code').notNullable();
    table.string('notes').notNullable();
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('accomodations');
}
