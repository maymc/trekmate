
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {
          city: 'Tokyo',
          state: 'n/a',
          country: 'Japan',
          start_date: '12/01/18',
          end_date: "12/10/18",
          collaborators: 1,
        },
        {
          city: 'San Francisco',
          state: 'California',
          country: 'n/a',
          start_date: '12/01/18',
          end_date: "12/10/18",
          collaborators: 2,
        },
      ]);
    });
};
