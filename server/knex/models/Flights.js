const bookshelf = require('./bookshelf.js')

const Flights = bookshelf.Model.extend({
  tableName: 'flights',
  idAttribute: 'id'
})



//Flights database can now be used with JS
module.exports = Flights