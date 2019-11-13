const express = require('express')
const router = express.Router()
const passport = require('passport')
const passportConf = require('../../plugins/passport/passport')

// Controller
const UserController = require('../../controllers/AuthController')

// Passport
const passportSignIn = passport.authenticate('local', { session: false } ) // check SignIn
const passportJWT =   passport.authenticate('jwt', { session: false }) // check Auth
const passportGoogle = passport.authenticate('google', { session: false})
const passportFacebook = passport.authenticate('facebook', { session: false})

// Router

router.route('/test')
    .get((UserController.test))

// SignUp
router.route('/signup')
    .post(UserController.signUp) // SignUp with generate Hash in function  save()

// SignIn
router.route('/signin')
    .post(passportSignIn, UserController.signIn) // SignIn with check email, password (bcrypt)

// GOOGLE SignIn
router.route('/oauth/google')
    .post(passportGoogle, UserController.googleSignIn)

// FACEBOOK SignIn
router.route('/oauth/facebook')
    .post(passportFacebook, UserController.facebookSignIn)

// Unique Email or username
router.route('/unique')
    .post(UserController.unique)

// Get current user
router.route('/currentuser')
    .get(passportJWT, UserController.currentUser)

// Test
router.route('/secret')
    .get(passportJWT, UserController.secret)

// Export router
module.exports = router

