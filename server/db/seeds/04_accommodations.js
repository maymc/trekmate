
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accommodations').del()
    .then(function () {
      // Inserts seed entries
      return knex('accommodations').insert([
        {
          lodging_name: "Trump International Hotel & Tower",
          check_in_date: "05/31/2019",
          check_out_date: "09/24/2019",
          reservation_code: "T23059A",
          price: "$85.44",
          address: "581 Jay Avenue",
          user_id: 2,
          trip_id: 3,
          is_paid: true,
          notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
          lodging_name: "Langham Hotel",
          check_in_date: "01/11/2020",
          check_out_date: "12/10/2019",
          reservation_code: "S63311S",
          price: "$107.48",
          address: "24854 Saint Paul Terrace",
          user_id: 1,
          trip_id: 4,
          is_paid: false,
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
          lodging_name: "Four Seasons Gresham Palace",
          check_in_date: "01/20/2019",
          check_out_date: "09/30/2019",
          reservation_code: "H16149",
          price: "$67.41",
          address: "92552 Forest Point",
          user_id: 1,
          trip_id: 3,
          is_paid: false,
          notes: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
          lodging_name: "Hotel de Crillon",
          check_in_date: "03/02/2019",
          check_out_date: "02/16/2020",
          reservation_code: "T2642XS",
          price: "$268.58",
          address: "672 Crescent Oaks Circle",
          user_id: 1,
          trip_id: 3,
          is_paid: false,
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        }, {
          lodging_name: "Hotel Amigo",
          check_in_date: "03/31/2019",
          check_out_date: "04/29/2019",
          reservation_code: "T458X2D",
          price: "$96.55",
          address: "182 2nd Parkway",
          user_id: 1,
          trip_id: 2,
          is_paid: false,
          notes: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum."
        }, {
          lodging_name: "Hotel Amigo",
          check_in_date: "02/08/2019",
          check_out_date: "01/22/2020",
          reservation_code: "S02671B",
          price: "$256.99",
          address: "56568 Summer Ridge Street",
          user_id: 1,
          trip_id: 2,
          is_paid: true,
          notes: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
        }, {
          lodging_name: "Hotel de Crillon",
          check_in_date: "05/13/2019",
          check_out_date: "09/03/2019",
          reservation_code: "T8509",
          price: "$179.15",
          address: "85539 Saint Paul Alley",
          user_id: 4,
          trip_id: 2,
          is_paid: false,
          notes: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
        }, {
          lodging_name: "Soho House Berlin",
          check_in_date: "02/11/2020",
          check_out_date: "10/28/2019",
          reservation_code: "S21001S",
          price: "$169.69",
          address: "9058 Dapin Junction",
          user_id: 2,
          trip_id: 2,
          is_paid: true,
          notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
          lodging_name: "Langham Hotel",
          check_in_date: "10/28/2019",
          check_out_date: "03/19/2019",
          reservation_code: "Q31",
          price: "$178.82",
          address: "775 Kennedy Plaza",
          user_id: 3,
          trip_id: 3,
          is_paid: false,
          notes: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
        }, {
          lodging_name: "Four Seasons Gresham Palace",
          check_in_date: "11/25/2019",
          check_out_date: "09/24/2019",
          reservation_code: "S72363R",
          price: "$261.68",
          address: "5 Milwaukee Drive",
          user_id: 1,
          trip_id: 4,
          is_paid: true,
          notes: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        }, {
          lodging_name: "Mandarin Oriental",
          check_in_date: "08/06/2019",
          check_out_date: "01/28/2020",
          reservation_code: "V9605",
          price: "$151.01",
          address: "00011 Haas Way",
          user_id: 1,
          trip_id: 2,
          is_paid: false,
          notes: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
        }, {
          lodging_name: "Hotel Amigo",
          check_in_date: "05/01/2019",
          check_out_date: "06/29/2019",
          reservation_code: "C8302",
          price: "$212.29",
          address: "4 Loeprich Lane",
          user_id: 1,
          trip_id: 2,
          is_paid: false,
          notes: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
        }, {
          lodging_name: "Langham Hotel",
          check_in_date: "12/28/2018",
          check_out_date: "09/03/2019",
          reservation_code: "C44310",
          price: "$96.45",
          address: "97 Dunning Center",
          user_id: 3,
          trip_id: 4,
          is_paid: true,
          notes: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
        }, {
          lodging_name: "Le Sirenuse",
          check_in_date: "09/11/2019",
          check_out_date: "05/28/2019",
          reservation_code: "M21942",
          price: "$87.27",
          address: "3256 Victoria Center",
          user_id: 2,
          trip_id: 3,
          is_paid: false,
          notes: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
        }, {
          lodging_name: "Le Sirenuse",
          check_in_date: "09/02/2019",
          check_out_date: "09/04/2019",
          reservation_code: "M24259",
          price: "$57.21",
          address: "5 Waxwing Park",
          user_id: 3,
          trip_id: 3,
          is_paid: false,
          notes: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
        }, {
          lodging_name: "Four Seasons Gresham Palace",
          check_in_date: "12/29/2018",
          check_out_date: "05/13/2019",
          reservation_code: "S52189S",
          price: "$256.23",
          address: "5201 Mallory Park",
          user_id: 3,
          trip_id: 3,
          is_paid: true,
          notes: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
        }, {
          lodging_name: "Four Seasons Gresham Palace",
          check_in_date: "10/27/2019",
          check_out_date: "08/02/2019",
          reservation_code: "M80079A",
          price: "$194.58",
          address: "10 Grasskamp Trail",
          user_id: 3,
          trip_id: 1,
          is_paid: true,
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
        }, {
          lodging_name: "Soho House Berlin",
          check_in_date: "04/13/2019",
          check_out_date: "03/23/2019",
          reservation_code: "S55292D",
          price: "$273.07",
          address: "8 Continental Avenue",
          user_id: 2,
          trip_id: 3,
          is_paid: false,
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
        }, {
          lodging_name: "Trump International Hotel & Tower",
          check_in_date: "06/16/2019",
          check_out_date: "02/03/2019",
          reservation_code: "T2140XS",
          price: "$59.41",
          address: "532 Pepper Wood Lane",
          user_id: 3,
          trip_id: 2,
          is_paid: false,
          notes: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
        }, {
          lodging_name: "Mandarin Oriental",
          check_in_date: "02/03/2019",
          check_out_date: "12/22/2019",
          reservation_code: "S63012D",
          price: "$73.07",
          address: "29598 Express Point",
          user_id: 4,
          trip_id: 1,
          is_paid: false,
          notes: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui."
        }
      ]);
    });
};
