const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AuthSchema = new Schema({
  status: {
    type: String
  },
  user_id: {
    type: String
  }
})

module.exports = mongoose.model('Auth', AuthSchema)