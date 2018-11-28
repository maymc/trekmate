const bookshelf = require('./bookshelf.js')

const Trips = bookshelf.Model.extend({
  tableName: 'trips',
  idAttribute: 'id'
})



//Trips database can now be used with JS
module.exports = Trips