
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('transit').del()
    .then(function () {
      // Inserts seed entries
      return knex('transit').insert([
        {
          type: 'bus',
          date: '12/01/18',
          time: '08:00',
          reservation: 'yes',
        },
      ]);
    });
};
