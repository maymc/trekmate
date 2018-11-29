
exports.up = function (knex, Promise) {
  return knex.schema.createTable('transit', function (table) {
    table.increments('id').primary();
    table.string('type').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('reservation').notNullable();
    table.decimal('price').notNullable().defaultTo(0.00);
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
  return knex.schema.dropTable('transit');
}
