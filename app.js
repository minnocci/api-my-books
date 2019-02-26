const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const headers = require('./config/headers')
const Auth = require('./api/models/authModel')
const Me = require('./api/models/meModel')
const Categories = require('./api/models/categoriesModel')
const Books = require('./api/models/booksModel')
  
const mongoDB = process.env.MONGO_URI
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(allowCrossDomain)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const authRoutes = require('./api/routes/authRoutes')
const meRoutes = require('./api/routes/meRoutes')
const categoriesRoutes = require('./api/routes/categoriesRoutes')
const booksRoutes = require('./api/routes/booksRoutes')
authRoutes(app)
meRoutes(app)
categoriesRoutes(app)
booksRoutes(app)

app.listen(port)

console.log('todo list RESTful API server started on: ' + port)