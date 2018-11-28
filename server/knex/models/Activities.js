const bookshelf = require('./bookshelf.js')

const Activities = bookshelf.Model.extend({
  tableName: 'activities',
  idAttribute: 'id'
})



//Activities database can now be used with JS
module.exports = Activities