const mongoose = require('mongoose')
const Books = mongoose.model('Books')

exports.getAllBooks = (req, res) => {
  Books.find({}, (err, booksList) => {
    if (err) res.send(err)
    res.json(booksList.map((book) => (
      {
        id: book['id'],
        title: book['title'],
        content: book['content'],
        image_url: book['image_url'],
        category_id: book['category_id']
      }
    )))
  })
}

exports.getBook = (req, res) => {
  Books.findOne({id: req.params.bookId}, (err, book) => {
    if (err) res.send(err)
    res.json(
      {
        id: book['id'],
        title: book['title'],
        content: book['content'],
        image_url: book['image_url'],
        category_id: book['category_id']
      }
    )
  })
}