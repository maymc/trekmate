
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('transit').del()
    .then(function () {
      // Inserts seed entries
      return knex('transit').insert([
        {
          type: "shuttle",
          date: "01/26/2019",
          time: "1:23 AM",
          reservation: "Yes",
          price: "$88.11",
          user_id: 4,
          trip_id: 3
        }, {
          type: "uber",
          date: "10/08/2019",
          time: "10:21 AM",
          reservation: "No",
          price: "$183.99",
          user_id: 2,
          trip_id: 3
        }, {
          type: "uber",
          date: "08/11/2019",
          time: "10:03 PM",
          reservation: "Yes",
          price: "$223.60",
          user_id: 2,
          trip_id: 2
        }, {
          type: "taxi",
          date: "11/18/2019",
          time: "5:30 AM",
          reservation: "No",
          price: "$155.71",
          user_id: 1,
          trip_id: 2
        }, {
          type: "car rental",
          date: "01/20/2020",
          time: "7:50 PM",
          reservation: "No",
          price: "$84.09",
          user_id: 4,
          trip_id: 2
        }, {
          type: "uber",
          date: "10/01/2019",
          time: "12:01 PM",
          reservation: "No",
          price: "$76.50",
          user_id: 4,
          trip_id: 1
        }, {
          type: "uber",
          date: "02/26/2019",
          time: "3:22 AM",
          reservation: "No",
          price: "$309.01",
          user_id: 1,
          trip_id: 3
        }, {
          type: "shuttle",
          date: "12/23/2018",
          time: "2:10 AM",
          reservation: "Yes",
          price: "$360.15",
          user_id: 3,
          trip_id: 4
        }, {
          type: "bus",
          date: "11/04/2019",
          time: "3:14 AM",
          reservation: "No",
          price: "$365.67",
          user_id: 1,
          trip_id: 4
        }, {
          type: "shuttle",
          date: "10/31/2019",
          time: "7:22 PM",
          reservation: "Yes",
          price: "$336.23",
          user_id: 1,
          trip_id: 2
        }, {
          type: "uber",
          date: "05/20/2019",
          time: "4:36 AM",
          reservation: "No",
          price: "$325.79",
          user_id: 3,
          trip_id: 1
        }, {
          type: "uber",
          date: "05/21/2019",
          time: "8:34 PM",
          reservation: "Yes",
          price: "$193.15",
          user_id: 4,
          trip_id: 3
        }, {
          type: "uber",
          date: "02/06/2020",
          time: "5:49 AM",
          reservation: "No",
          price: "$126.27",
          user_id: 3,
          trip_id: 1
        }, {
          type: "shuttle",
          date: "12/22/2018",
          time: "2:59 AM",
          reservation: "No",
          price: "$241.12",
          user_id: 3,
          trip_id: 2
        }, {
          type: "shuttle",
          date: "09/03/2019",
          time: "6:16 PM",
          reservation: "Yes",
          price: "$432.00",
          user_id: 2,
          trip_id: 3
        }, {
          type: "taxi",
          date: "09/14/2019",
          time: "4:30 PM",
          reservation: "No",
          price: "$161.09",
          user_id: 1,
          trip_id: 1
        }, {
          type: "car rental",
          date: "04/02/2019",
          time: "1:31 PM",
          reservation: "No",
          price: "$295.76",
          user_id: 4,
          trip_id: 3
        }, {
          type: "taxi",
          date: "02/10/2019",
          time: "11:28 AM",
          reservation: "No",
          price: "$466.56",
          user_id: 2,
          trip_id: 3
        }, {
          type: "taxi",
          date: "07/08/2019",
          time: "4:30 AM",
          reservation: "Yes",
          price: "$483.59",
          user_id: 3,
          trip_id: 2
        }, {
          type: "shuttle",
          date: "09/10/2019",
          time: "5:02 AM",
          reservation: "No",
          price: "$400.73",
          user_id: 2,
          trip_id: 4
        }
      ]);
    });
};
