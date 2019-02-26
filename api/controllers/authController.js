const mongoose = require('mongoose')
const Auth = mongoose.model('Auth')

exports.postAuth = (req, res) => {
  Auth.findOne({'status': 'success'}, (err, entry) => {
    if (err) res.send(err)
    res.json({user_id: entry['user_id'], status: entry['status']})
  })
}