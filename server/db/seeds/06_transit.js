
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('transit').del()
    .then(function () {
      // Inserts seed entries
      return knex('transit').insert([
        {
          type: "shuttle",
          date: "01/02/18",
          time: "1:23 AM",
          reservation: "Yes",
          price: "88.11",
          user_id: 1,
          trip_id: 1
        }, {
          type: "uber",
          date: "10/18/18",
          time: "10:21 AM",
          reservation: "No",
          price: "183.99",
          user_id: 4,
          trip_id: 4
        }, {
          type: "uber",
          date: "04/24/18",
          time: "10:03 PM",
          reservation: "Yes",
          price: "223.60",
          user_id: 3,
          trip_id: 3
        }, {
          type: "taxi",
          date: "02/18/18",
          time: "5:30 AM",
          reservation: "No",
          price: "155.71",
          user_id: 2,
          trip_id: 2
        }, {
          type: "car rental",
          date: "01/10/18",
          time: "7:50 PM",
          reservation: "No",
          price: "84.09",
          user_id: 1,
          trip_id: 1
        }, {
          type: "uber",
          date: "10/15/18",
          time: "12:01 PM",
          reservation: "No",
          price: "76.50",
          user_id: 4,
          trip_id: 4
        }, {
          type: "uber",
          date: "04/25/18",
          time: "3:22 PM",
          reservation: "No",
          price: "309.01",
          user_id: 1,
          trip_id: 3
        }, {
          type: "shuttle",
          date: "10/20/18",
          time: "2:10 AM",
          reservation: "Yes",
          price: "360.15",
          user_id: 4,
          trip_id: 4
        }, {
          type: "bus",
          date: "01/04/18",
          time: "3:14 AM",
          reservation: "No",
          price: "365.67",
          user_id: 1,
          trip_id: 1
        }, {
          type: "shuttle",
          date: "10/20/18",
          time: "7:22 PM",
          reservation: "Yes",
          price: "336.23",
          user_id: 4,
          trip_id: 4
        }, {
          type: "uber",
          date: "01/08/18",
          time: "4:36 AM",
          reservation: "No",
          price: "325.79",
          user_id: 1,
          trip_id: 1
        }, {
          type: "uber",
          date: "04/25/18",
          time: "8:34 PM",
          reservation: "Yes",
          price: "193.15",
          user_id: 3,
          trip_id: 3
        }, {
          type: "uber",
          date: "02/16/18",
          time: "5:49 AM",
          reservation: "No",
          price: "126.27",
          user_id: 2,
          trip_id: 2
        }, {
          type: "shuttle",
          date: "02/19/18",
          time: "2:59 AM",
          reservation: "No",
          price: "241.12",
          user_id: 2,
          trip_id: 2
        }, {
          type: "shuttle",
          date: "01/03/18",
          time: "6:16 PM",
          reservation: "Yes",
          price: "432.00",
          user_id: 1,
          trip_id: 1
        }, {
          type: "taxi",
          date: "10/14/18",
          time: "4:30 PM",
          reservation: "No",
          price: "161.09",
          user_id: 4,
          trip_id: 4
        }, {
          type: "car rental",
          date: "04/23/18",
          time: "1:31 PM",
          reservation: "No",
          price: "295.76",
          user_id: 3,
          trip_id: 3
        }, {
          type: "taxi",
          date: "02/17/18",
          time: "11:28 AM",
          reservation: "No",
          price: "466.56",
          user_id: 2,
          trip_id: 2
        }, {
          type: "taxi",
          date: "04/26/18",
          time: "4:30 AM",
          reservation: "Yes",
          price: "483.59",
          user_id: 3,
          trip_id: 3
        }, {
          type: "shuttle",
          date: "10/16/18",
          time: "5:02 AM",
          reservation: "No",
          price: "400.73",
          user_id: 4,
          trip_id: 4
        }, {
          type: "car rental",
          date: "03/13/18",
          time: "1:31 PM",
          reservation: "No",
          price: "295.76",
          user_id: 3,
          trip_id: 5
        }, {
          type: "taxi",
          date: "05/08/18",
          time: "11:28 AM",
          reservation: "No",
          price: "466.56",
          user_id: 2,
          trip_id: 6
        }, {
          type: "taxi",
          date: "08/02/18",
          time: "4:30 AM",
          reservation: "Yes",
          price: "483.59",
          user_id: 3,
          trip_id: 7
        }, {
          type: "shuttle",
          date: "07/24/18",
          time: "5:02 AM",
          reservation: "No",
          price: "400.73",
          user_id: 4,
          trip_id: 8
        }, {
          type: "car rental",
          date: "07/26/18",
          time: "1:31 PM",
          reservation: "No",
          price: "295.76",
          user_id: 3,
          trip_id: 8
        }, {
          type: "taxi",
          date: "05/07/18",
          time: "11:28 AM",
          reservation: "No",
          price: "466.56",
          user_id: 2,
          trip_id: 6
        }, {
          type: "taxi",
          date: "08/04/18",
          time: "4:30 AM",
          reservation: "Yes",
          price: "483.59",
          user_id: 3,
          trip_id: 7
        }, {
          type: "shuttle",
          date: "03/22/18",
          time: "5:02 AM",
          reservation: "No",
          price: "400.73",
          user_id: 4,
          trip_id: 5
        }
      ]);
    });
};
