const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategoriesSchema = new Schema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  book_ids: [{
    type: String
  }]
})

module.exports = mongoose.model('Categories', CategoriesSchema)