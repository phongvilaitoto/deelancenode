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

// Client router
app.use('/client/auth', require('./routes/api/client/auth')) // auth router
app.use('/client/profile', require('./routes/api/client/profile')) // profile router
app.use('/client/portfolio', require('./routes/api/client/portfolio')) // portfolio router
app.use('/client/category', require('./routes/api/client/category')) // category router
app.use('/client/message', require('./routes/api/client/message')) // message router
app.use('/client/order', require('./routes/api/client/order')) // order router
app.use('/client/evidence', require('./routes/api/client/evidence')) // evidence router
app.use('/client/review', require('./routes/api/client/review')) // review router

// Web page router
app.use('/client/home', require('./routes/api/client/home')) // Home page

// Admin router
app.use('/admin/portfolio', require('./routes/api/admin/portfolio')) // admin portfolio
app.use('/admin/category', require('./routes/api/admin/category')) // admin category
app.use('/admin/user', require('./routes/api/admin/user')) // admin user
app.use('/admin/order', require('./routes/api/admin/order')) // admin order
app.use('/admin/evidence', require('./routes/api/admin/evidence')) // admin evidence

// render index Vue js
app.get('*', (req, res) => {
    res.render('index.ejs')
})

// Export app
module.exports = app


