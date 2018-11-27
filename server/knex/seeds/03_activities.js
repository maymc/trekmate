
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {
          activity_name: 'Hiking',
          activity_owner: 'Abby',
          location: 'n/a',
          date: '12/01/18',
          time: '12/10/18',
          price: 2,
          type: 'outdoors',
          votes: 2,
          reservation: 'no',
          notes: 'waking up early'
        },
      ]);
    });
};
