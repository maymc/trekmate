
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.boolean('has_trip').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();

  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
}
