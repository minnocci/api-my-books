module.exports = function(app) {
  const categories = require('../controllers/categoriesController')

  app.route('/categories')
    .get(categories.getAllCategories)

  app.route('/categories/:categoryId')
    .get(categories.getCategory)

}