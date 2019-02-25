const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MeSchema = new Schema({
  user_id: {
    type: String
  },
  access_type: {
    type: [{
      type: String,
      enum: ['free', 'premium']
    }],
    default: ['premium']
  }
})

module.exports = mongoose.model('Me', MeSchema)