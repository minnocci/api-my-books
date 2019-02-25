const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BooksSchema = new Schema({
  image_url: {
    type: String
  },
  id: {
    type: String
  },
  category_id: {
    type: String
  },
  title: {
    type: String
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('Books', BooksSchema)