
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('accommodations').del()
    .then(function () {
      // Inserts seed entries
      return knex('accommodations').insert([
        {
          lodging_name: "Trump International Hotel & Tower",
          check_in_date: "01/05/2018",
          check_out_date: "01/10/2018",
          reservation_code: "T23059A",
          price: "85.44",
          address: "581 Jay Avenue",
          user_id: 1,
          trip_id: 1,
          is_paid: "Yes",
          notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
          lodging_name: "Langham Hotel",
          check_in_date: "02/15/2018",
          check_out_date: "02/18/2018",
          reservation_code: "S63311S",
          price: "107.48",
          address: "24854 Saint Paul Terrace",
          user_id: 2,
          trip_id: 2,
          is_paid: "No",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
          lodging_name: "Four Seasons Gresham Palace",
          check_in_date: "04/25/2018",
          check_out_date: "04/26/2018",
          reservation_code: "H16149",
          price: "67.41",
          address: "92552 Forest Point",
          user_id: 3,
          trip_id: 3,
          is_paid: "No",
          notes: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
          lodging_name: "Hotel de Marriot",
          check_in_date: "10/12/2018",
          check_out_date: "10/25/2018",
          reservation_code: "T2642XS",
          price: "268.58",
          address: "672 Crescent Oaks Circle",
          user_id: 4,
          trip_id: 4,
          is_paid: "No",
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        },
        {
          lodging_name: "Sheraton",
          check_in_date: "01/01/2018",
          check_out_date: "01/05/2018",
          reservation_code: "T23059A",
          price: "85.44",
          address: "1244 Bay Avenue",
          user_id: 1,
          trip_id: 1,
          is_paid: "Yes",
          notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
          lodging_name: "Beach Hotel",
          check_in_date: "02/18/2018",
          check_out_date: "02/20/2018",
          reservation_code: "S63311S",
          price: "107.48",
          address: "12312 Saint Paul Terrace",
          user_id: 2,
          trip_id: 2,
          is_paid: "No",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
          lodging_name: "Two Seasons Palace",
          check_in_date: "04/23/2018",
          check_out_date: "04/25/2018",
          reservation_code: "H16149",
          price: "67.41",
          address: "1412 Forest Point",
          user_id: 3,
          trip_id: 3,
          is_paid: "No",
          notes: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
          lodging_name: "Hotel de Crillon",
          check_in_date: "10/15/2018",
          check_out_date: "10/20/2018",
          reservation_code: "T2642XS",
          price: "268.58",
          address: "672 Crescent Oaks Circle",
          user_id: 4,
          trip_id: 4,
          is_paid: "No",
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        },
        {
          lodging_name: "Trump International Hotel & Tower",
          check_in_date: "03/12/2018",
          check_out_date: "03/15/2018",
          reservation_code: "T23059A",
          price: "85.44",
          address: "581 Jay Avenue",
          user_id: 1,
          trip_id: 5,
          is_paid: "Yes",
          notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
          lodging_name: "Langham Hotel",
          check_in_date: "05/05/2018",
          check_out_date: "05/08/2018",
          reservation_code: "S63311S",
          price: "107.48",
          address: "24854 Saint Paul Terrace",
          user_id: 2,
          trip_id: 6,
          is_paid: "No",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
          lodging_name: "Four Seasons Gresham Palace",
          check_in_date: "08/02/2018",
          check_out_date: "08/03/2018",
          reservation_code: "H16149",
          price: "67.41",
          address: "92552 Forest Point",
          user_id: 3,
          trip_id: 7,
          is_paid: "No",
          notes: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
          lodging_name: "Hotel de Marriot",
          check_in_date: "08/23/2018",
          check_out_date: "08/25/2018",
          reservation_code: "T2642XS",
          price: "268.58",
          address: "672 Crescent Oaks Circle",
          user_id: 4,
          trip_id: 8,
          is_paid: "No",
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        },
        {
          lodging_name: "Sheraton",
          check_in_date: "03/15/2018",
          check_out_date: "03/24/2018",
          reservation_code: "T23059A",
          price: "85.44",
          address: "1244 Bay Avenue",
          user_id: 1,
          trip_id: 5,
          is_paid: "Yes",
          notes: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
        }, {
          lodging_name: "Beach Hotel",
          check_in_date: "05/08/2018",
          check_out_date: "05/10/2018",
          reservation_code: "S63311S",
          price: "107.48",
          address: "12312 Saint Paul Terrace",
          user_id: 2,
          trip_id: 6,
          is_paid: "No",
          notes: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius."
        }, {
          lodging_name: "Two Seasons Palace",
          check_in_date: "08/03/2018",
          check_out_date: "08/04/2018",
          reservation_code: "H16149",
          price: "67.41",
          address: "1412 Forest Point",
          user_id: 3,
          trip_id: 7,
          is_paid: "No",
          notes: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }, {
          lodging_name: "Hotel de Crillon",
          check_in_date: "07/25/2018",
          check_out_date: "07/28/2018",
          reservation_code: "T2642XS",
          price: "268.58",
          address: "672 Crescent Oaks Circle",
          user_id: 4,
          trip_id: 8,
          is_paid: "No",
          notes: "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
        }
      ]);
    });
};
