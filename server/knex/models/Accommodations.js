const bookshelf = require('./bookshelf.js')

const Accommodations = bookshelf.Model.extend({
  tableName: 'accommodations',
  idAttribute: 'id'
})



//Accomodations database can now be used with JS
module.exports = Accommodations