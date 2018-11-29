const bookshelf = require('./bookshelf.js')
const Users = require('./Users.js')

const Trips = bookshelf.Model.extend({
  tableName: 'trips',
  user_id: function () {
    return this.belongsTo(Users, 'user_id');
  },
  idAttribute: 'id',
  hasTimestamps: true
})



//Trips database can now be used with JS
module.exports = Trips