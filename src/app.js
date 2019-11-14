const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const jsonParser = BodyParser.json()
const urlencodedParser = BodyParser.urlencoded({ extended: false }) // use for form input
const cors = require('cors') // require cors to connect vue.js
require('./plugins/mongodb/mongodb') // connect to db

// Middlewares
app.use(cors()) // use cors
app.use(jsonParser) // use jsonpParser to read json
app.use(urlencodedParser) // use urlendcoded
app.use(express.static('public')) // use public image

// Router
app.use('/auth', require('./routes/api/auth')) // auth router
app.use('/profile', require('./routes/api/profile')) // profile router
app.use('/portfolio', require('./routes/api/portfolio')) // portfolio router
app.use('/category', require('./routes/api/category')) // category router
app.use('/message', require('./routes/api/message')) // message router
app.use('/order', require('./routes/api/order')) // order router

// Web page router
app.use('/home', require('./routes/api/home')) // Home page

// render index Vue js
app.get('*', (req, res) => {
    res.render('index.ejs')
})

// Export app
module.exports = app


