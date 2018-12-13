
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {
          airlines: "Emirates",
          departure_time: "2018-01-01 23:21:40",
          arrival_time: "2018-01-10 18:53:16",
          reservation_code: "T24622S",
          checked_in_baggage: "2",
          price: "478.98",
          notes: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          user_id: 1,
          trip_id: 1
        }, {
          airlines: "Emirates",
          departure_time: "2018-01-05 03:38:17",
          arrival_time: "2018-01-07 17:14:31",
          reservation_code: "T23042",
          checked_in_baggage: "4",
          price: "424.12",
          notes: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          user_id: 1,
          trip_id: 1
        }, {
          airlines: "Hawaiian Airlines",
          departure_time: "2018-01-08 20:22:50",
          arrival_time: "2018-01-09 14:26:41",
          reservation_code: "S72062E",
          checked_in_baggage: "1",
          price: "408.61",
          notes: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          user_id: 1,
          trip_id: 1
        }, {
          airlines: "Emirates",
          departure_time: "2018-02-15 00:00:00",
          arrival_time: "2018-02-18 19:06:45",
          reservation_code: "J8482",
          checked_in_baggage: "1",
          price: "243.69",
          notes: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          user_id: 2,
          trip_id: 2
        }, {
          airlines: "WestJet",
          departure_time: "2018-02-18 20:04:34",
          arrival_time: "2018-02-20 00:14:52",
          reservation_code: "S46902S",
          checked_in_baggage: "1",
          price: "79.16",
          notes: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          user_id: 2,
          trip_id: 2
        }, {
          airlines: "AirAsia",
          departure_time: "2019-11-26 06:16:55",
          arrival_time: "2019-06-04 22:14:22",
          reservation_code: "T470X4D",
          checked_in_baggage: "1",
          price: "474.01",
          notes: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          user_id: 3,
          trip_id: 3
        }, {
          airlines: "AirAsia",
          departure_time: "2019-04-05 15:02:03",
          arrival_time: "2019-08-10 00:22:53",
          reservation_code: "B653",
          checked_in_baggage: "1",
          price: "241.20",
          notes: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          user_id: 3,
          trip_id: 3
        }, {
          airlines: "AirAsia",
          departure_time: "2020-01-03 12:35:20",
          arrival_time: "2019-10-14 14:44:13",
          reservation_code: "N3020",
          checked_in_baggage: "1",
          price: "417.45",
          notes: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          user_id: 4,
          trip_id: 4
        }, {
          airlines: "Qatar Airways",
          departure_time: "2019-02-21 12:02:36",
          arrival_time: "2019-05-29 14:44:55",
          reservation_code: "S51051",
          checked_in_baggage: "1",
          price: "183.68",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          user_id: 4,
          trip_id: 4
        }
      ]);
    });
};
