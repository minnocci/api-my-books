const mongoose = require('mongoose')
const Me = mongoose.model('Me')

exports.getMe = (req, res) => {
  Me.findOne({}, (err, entry) => {
    if (err) res.send(err)
    res.json({user_id: entry['user_id'], access_type: entry['access_type']})
  })
}