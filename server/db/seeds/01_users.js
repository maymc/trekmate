
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          first_name: 'Abby',
          last_name: 'Zhang',
          email: 'AbbyZhang@gmail.com',
          password: "admin",
        },
        {
          first_name: 'Jamie',
          last_name: 'Frady',
          email: 'JamieFrady@gmail.com',
          password: "admin",
        },
        {
          first_name: 'Jason',
          last_name: 'Hoe',
          email: 'JasonHoe@gmail.com',
          password: "admin",
        },
        {
          first_name: 'May',
          last_name: 'Chen',
          email: 'MayChen@gmail.com',
          password: "admin",
        },

      ]);
    });
};
