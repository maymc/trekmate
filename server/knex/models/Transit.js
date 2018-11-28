const bookshelf = require('./bookshelf.js')

const Transit = bookshelf.Model.extend({
  tableName: 'transit',
  idAttribute: 'id'
})



//Transit database can now be used with JS
module.exports = Transit