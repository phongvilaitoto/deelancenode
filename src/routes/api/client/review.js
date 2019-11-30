const express = require('express')
const router = express.Router()

const ReviewController = require('../../../controllers/client/ReviewController')

// Middleware
const passport = require('passport')
const passportConf = require('../../../middleware/client/auth') // changed passport plugin
const isAuth =  passport.authenticate('auth', { session: false }) // check Auth

router.route('/get-all')
    .get(ReviewController.getAll)

router.route('/post')
    .post([ isAuth ] ,ReviewController.post) // is Auth

router.route('/update-review')
    .put([ isAuth ], ReviewController.updateReview) // is Auth

module.exports = router
