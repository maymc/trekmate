
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('flights').del()
    .then(function () {
      // Inserts seed entries
      return knex('flights').insert([
        {
          airlines: "Emirates",
          departure_time: "2019-05-08 23:21:40",
          arrival_time: "2019-08-05 18:53:16",
          reservation_code: "T24622S",
          price: "$478.98",
          notes: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
          user_id: 4,
          trip_id: 2
        }, {
          airlines: "Emirates",
          departure_time: "2019-04-15 03:38:17",
          arrival_time: "2018-12-30 17:14:31",
          reservation_code: "T23042",
          price: "$424.12",
          notes: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
          user_id: 3,
          trip_id: 3
        }, {
          airlines: "Hawaiian Airlines",
          departure_time: "2019-09-05 20:22:50",
          arrival_time: "2019-05-28 14:26:41",
          reservation_code: "S72062E",
          price: "$408.61",
          notes: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
          user_id: 4,
          trip_id: 3
        }, {
          airlines: "Emirates",
          departure_time: "2019-12-02 00:00:00",
          arrival_time: "2019-01-15 19:06:45",
          reservation_code: "J8482",
          price: "$243.69",
          notes: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          user_id: 3,
          trip_id: 4
        }, {
          airlines: "WestJet",
          departure_time: "2019-11-24 20:04:34",
          arrival_time: "2020-03-16 00:14:52",
          reservation_code: "S46902S",
          price: "$79.16",
          notes: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          user_id: 2,
          trip_id: 2
        }, {
          airlines: "AirAsia",
          departure_time: "2019-11-26 06:16:55",
          arrival_time: "2019-06-04 22:14:22",
          reservation_code: "T470X4D",
          price: "$474.01",
          notes: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
          user_id: 3,
          trip_id: 3
        }, {
          airlines: "AirAsia",
          departure_time: "2019-04-05 15:02:03",
          arrival_time: "2019-08-10 00:22:53",
          reservation_code: "B653",
          price: "$241.20",
          notes: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          user_id: 3,
          trip_id: 4
        }, {
          airlines: "AirAsia",
          departure_time: "2020-01-03 12:35:20",
          arrival_time: "2019-10-14 14:44:13",
          reservation_code: "N3020",
          price: "$417.45",
          notes: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          user_id: 4,
          trip_id: 2
        }, {
          airlines: "Qatar Airways",
          departure_time: "2019-02-21 12:02:36",
          arrival_time: "2019-05-29 14:44:55",
          reservation_code: "S51051",
          price: "$183.68",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          user_id: 3,
          trip_id: 3
        }, {
          airlines: "ANA All Nippon Airways",
          departure_time: "2019-12-03 21:39:05",
          arrival_time: "2019-02-01 11:23:17",
          reservation_code: "S63239S",
          price: "$300.22",
          notes: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          user_id: 2,
          trip_id: 3
        }, {
          airlines: "Emirates",
          departure_time: "2019-05-19 04:33:27",
          arrival_time: "2019-11-23 22:18:08",
          reservation_code: "S21322",
          price: "$129.38",
          notes: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
          user_id: 3,
          trip_id: 2
        }, {
          airlines: "Southwest Airlines",
          departure_time: "2019-06-01 16:34:28",
          arrival_time: "2020-02-15 16:59:30",
          reservation_code: "S53126S",
          price: "$297.46",
          notes: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
          user_id: 3,
          trip_id: 1
        }, {
          airlines: "Hawaiian Airlines",
          departure_time: "2019-12-30 19:33:29",
          arrival_time: "2019-08-02 19:08:23",
          reservation_code: "T442X3",
          price: "$224.48",
          notes: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          user_id: 1,
          trip_id: 4
        }, {
          airlines: "Qatar Airways",
          departure_time: "2019-05-11 18:35:47",
          arrival_time: "2019-12-11 11:47:10",
          reservation_code: "S82433M",
          price: "$486.15",
          notes: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
          user_id: 1,
          trip_id: 4
        }, {
          airlines: "Singapore Airlines",
          departure_time: "2019-04-09 16:50:59",
          arrival_time: "2019-05-06 14:22:32",
          reservation_code: "H0524",
          price: "$112.02",
          notes: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
          user_id: 3,
          trip_id: 4
        }, {
          airlines: "WestJet",
          departure_time: "2018-12-20 04:26:25",
          arrival_time: "2019-01-02 04:57:31",
          reservation_code: "T24131A",
          price: "$299.14",
          notes: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          user_id: 2,
          trip_id: 1
        }, {
          airlines: "ANA All Nippon Airways",
          departure_time: "2019-08-22 02:16:41",
          arrival_time: "2020-01-07 15:33:37",
          reservation_code: "S52022H",
          price: "$212.43",
          notes: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          user_id: 2,
          trip_id: 1
        }, {
          airlines: "Qatar Airways",
          departure_time: "2019-01-08 06:04:15",
          arrival_time: "2019-03-17 10:47:18",
          reservation_code: "T63832D",
          price: "$117.08",
          notes: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
          user_id: 1,
          trip_id: 3
        }, {
          airlines: "Southwest Airlines",
          departure_time: "2019-09-19 02:05:03",
          arrival_time: "2019-02-04 22:56:53",
          reservation_code: "S59902",
          price: "$210.42",
          notes: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
          user_id: 2,
          trip_id: 2
        }, {
          airlines: "ANA All Nippon Airways",
          departure_time: "2020-01-27 04:46:04",
          arrival_time: "2019-07-09 13:31:04",
          reservation_code: "S8249",
          price: "$387.27",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
          user_id: 3,
          trip_id: 2
        }
      ]);
    });
};
