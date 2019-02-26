const mongoose = require('mongoose')
const Categories = mongoose.model('Categories')

exports.getAllCategories = (req, res) => {
  Categories.find({}, (err, categoryList) => {
    if (err) res.send(err)
    res.json(categoryList.map((category) => (
      {
        id: category['id'],
        title: category['title'],
        book_ids: category['book_ids']
      }
    )))
  })
}

exports.getCategory = (req, res) => {
  Categories.findOne({id: req.params.categoryId}, (err, category) => {
    if (err) res.send(err)
    res.json(
      {
        id: category['id'],
        title: category['title'],
        book_ids: category['book_ids']
      }
    )
  })
}