
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Abby',
          last_name: 'Zhang',
          email: 'Abby Zhang',
          password: "admin",
          has_trip: true
        },
        {
          first_name: 'Jamie',
          last_name: 'Frady',
          email: 'Jamie Frady',
          password: "admin",
          has_trip: true
        },
        {
          first_name: 'Jason',
          last_name: 'Hoe',
          email: 'Jason Hoe',
          password: "admin",
          has_trip: true
        },
        {
          first_name: 'May',
          last_name: 'Chen',
          email: 'May Chen',
          password: "admin",
          has_trip: true
        },

      ]);
    });
};
