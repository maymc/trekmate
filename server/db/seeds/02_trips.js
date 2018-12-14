
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
          country: 'USA',
          start_date: '02/15/18',
          end_date: "02/20/18",
          collaborators: 2,
          user_id: 2
        },
        {
          city: 'Sydney',
          state: 'n/a',
          country: 'Australia',
          start_date: '04/23/18',
          end_date: "04/26/18",
          collaborators: 2,
          user_id: 3
        },
        {
          city: 'Anchorage',
          state: 'Alaska',
          country: 'USA',
          start_date: '10/12/18',
          end_date: "10/20/18",
          collaborators: 2,
          user_id: 4
        },
        {
          city: 'Paris',
          state: 'N/A',
          country: 'France',
          start_date: '03/12/18',
          end_date: "03/24/18",
          collaborators: 2,
          user_id: 1
        },
        {
          city: 'Ontario',
          state: 'N/A',
          country: 'Canada',
          start_date: '05/05/18',
          end_date: "05/10/18",
          collaborators: 2,
          user_id: 2
        },
        {
          city: 'Honolulu',
          state: 'HI',
          country: 'USA',
          start_date: '08/02/18',
          end_date: "08/04/18",
          collaborators: 3,
          user_id: 3
        },
        {
          city: 'St. Louis',
          state: 'Missouri',
          country: 'USA',
          start_date: '07/23/18',
          end_date: "07/28/18",
          collaborators: 1,
          user_id: 4
        },
      ]);
    });
};
