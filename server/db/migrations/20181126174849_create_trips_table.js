
exports.up = function (knex, Promise) {
  return knex.schema.createTable('trips', (table) => {
    table.increments('id').primary();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('country').notNullable();
    table.string('start_date').notNullable();
    table.string('end_date').notNullable();
    table.integer('collaborators').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    table.interger('user_id')
      .notNullable()
      .references('id')
      .inTable('trips')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('trips');
}
