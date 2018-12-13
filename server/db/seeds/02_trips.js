
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
          start_date: '01/01/18',
          end_date: "01/10/18",
          collaborators: 1,
          user_id: 1
        },
        {
          city: 'San Francisco',
          state: 'California',
          country: 'n/a',
          start_date: '02/15/18',
          end_date: "02/20/18",
          collaborators: 2,
          user_id: 2
        },
        {
          city: 'Sydney',
          state: 'n/a',
          country: 'Austalia',
          start_date: '04/23/18',
          end_date: "04/26/18",
          collaborators: 2,
          user_id: 4
        },
        {
          city: 'Alaska',
          state: 'US State',
          country: 'n/a',
          start_date: '10/12/18',
          end_date: "10/20/18",
          collaborators: 2,
          user_id: 3
        },
      ]);
    });
};
