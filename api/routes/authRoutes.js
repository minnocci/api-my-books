module.exports = function(app) {
  const auth = require('../controllers/authController')

  app.route('/auth')
    .post(auth.postAuth)

}