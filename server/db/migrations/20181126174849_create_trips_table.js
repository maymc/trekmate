
exports.up = function (knex, Promise) {
  return knex.schema.createTable('trips', (table) => {
    table.increments();
    table.string('city', 200).notNullable();
    table.string('state', 30).notNullable();
    table.string('country', 90).notNullable();
    table.string('start_date', 60).notNullable();
    table.string('end_date', 60).notNullable();
    table.string('collaborators').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    //Create the column then add foreign key
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('trips');
}
