
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accommodations').del()
    .then(function () {
      // Inserts seed entries
      return knex('accommodations').insert([
        {
          lodging_name: 'Sheraton',
          address: '123 Beachwalk Ave',
          check_in_date: 'n/a',
          check_out_date: '12/01/18',
          price: 300,
          is_paid: true,
          reservation_code: 'E729G',
          notes: 'n/a'
        },
      ]);
    });
};
