
exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id').primary()
    table.string('activity_name').notNullable();
    // table.string('activity_owner').notNullable();
    table.string('location').notNullable();
    table.string('date').notNullable();
    table.string('time').notNullable();
    table.string('price').notNullable();
    table.string('type').notNullable();
    table.integer('votes').notNullable();
    table.string('reservation').notNullable();
    table.string('notes').notNullable();
    table.string('image').notNullable();
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
  return knex.schema.dropTable('activities');
}
