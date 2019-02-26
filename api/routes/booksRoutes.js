module.exports = function(app) {
  const books = require('../controllers/booksController')

  app.route('/books')
    .get(books.getAllBooks)

  app.route('/books/:bookId')
    .get(books.getBook)

}