
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {
          airlines: 'Japan Airlines',
          departure_time: '14:00',
          arrival_time: '06:05',
          reservation_code: 'J214E3',
          price: 677,
          notes: 'n/a'
        },
      ]);
    });
};
