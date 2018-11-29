const bookshelf = require('./bookshelf.js')
const Users = require('./Users.js');
const Trips = require('./Trips.js');
const Transit = bookshelf.Model.extend({
  tableName: 'transit',
  user_id: function () {
    return this.belongsTo(Users, 'user_id');
  },
  trip_id: function () {
    return this.belongsTo(Trips, 'trip_id')
  },
  idAttribute: 'id',
  hasTimestamps: true
})



//Transit database can now be used with JS
module.exports = Transit