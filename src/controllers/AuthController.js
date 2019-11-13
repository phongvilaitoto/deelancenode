const JWT = require('jsonwebtoken') // require JWT
const { JWT_SECRET } = require('../configuration/main') // require secret key
const User = require('../models/User') // require User models

signToken = user => {
    return JWT.sign({   // Generate Token
        iss: JWT_SECRET,// secret code to generateToken
        sub: user.id,   // user.id or user._id
        iat: new Date().getTime(),  // Current time
        exp: new Date().setDate(new Date().getDate() + 1) // Current time + 1 Day
    }, JWT_SECRET) // secret key
}

module.exports = {
    // test
    test: async (req, res, next) => {
      const user = await User.find()
        res.status(200).json({ user })
    },
    // SignUp
    signUp: async (req, res, next) => {
        const { username, email, password } = req.body // request from form user
        const unique = await User.findOne({ $or: [{ username }, { email }] }) // Check Unique username || email
        if(unique) { // Protect but i have another one
            return res.status(403).json({ error: 'username | email has been use is already in use' })
        }
        const newUser = new User({  // Create a new user
            method: 'local',
            local: { password },
            username,
            email,
            type: 'employer'
        })
        await newUser.save() // save and use Hash in save function
        const token = signToken(newUser) // Generate the token
        res.status(200).json({ token }) // return a token
    },

    // SignIn
    signIn: async (req, res, next) => { // SignIn
        const token = signToken(req.user)  // Generate token after loggedIn // req.user is req current user
        res.status(200).json({ token }) // return a token
    },

    // Google SignIn
    googleSignIn: async (req, res, next) => {
      const token = signToken(req.user)
      res.status(200).json({ token })
    },

    // Facebook SignIn
    facebookSignIn: async (req, res, next) => {
        const token = signToken(req.user)
        res.status(200).json({ token })
    },

    // Current user
    currentUser: async (req, res, next) => { // Fetch current user
        const auth = await User.findOne({ // check current use with same id in mongodb
            _id: req.user.id
        })
        res.status(200).json({ auth })
    },

    // Unique
    unique: async (req, res, next) => { // Check unique username || email
        const value = req.body.value
        const unique = await User.findOne({
           $or: [{ username: value }, { email: value }]})
        if(unique) {
            return res.json({ valid: false }) // If have a same username || email return valid: false
        }
            return res.json({ valid: true }) // If not unique return valid: true
        },

    // Test
    secret: async (req, res, next) => { // Test
        // Test Login
        res.status(200).json({ user:req.user })
    }
}
