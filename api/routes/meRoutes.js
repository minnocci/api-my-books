module.exports = function(app) {
  const me = require('../controllers/meController')

  app.route('/me')
    .get(me.getMe)

}