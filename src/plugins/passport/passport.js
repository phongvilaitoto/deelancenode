const passport = require('passport') // require passport
const { ExtractJwt } = require('passport-jwt') // require ExtractJWT
const JwtStrategy = require('passport-jwt').Strategy // require JWT Strategy
const LocalStrategy = require('passport-local').Strategy // require Local Strategy
const GoogleTokenStrategy = require('passport-google-plus-token') // require google plus token ( auth )
const FacebookTokenStrategy = require('passport-facebook-token') // require facebook token ( auth )
const { JWT_SECRET, OAUTH } = require('../../configuration/main')  // requrie secret key
const User = require('../../models/User') // require User Model

// JWT STRATEGY
passport.use( new JwtStrategy({ // Use Strategy to find token from a user ( check Auth, return user from db )
    jwtFromRequest:  ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
        try {
            const user = await User.findById(payload.sub)  // Find the user specified in token
            if(!user) {  // If user doesn't exists, handle it
                return done(null, false)
            }
            done(null, user)  // Otherwise, return the user
        } catch (err) {
            done(err, false)
        }
    }))

// GOOGLE OAUTH STRATEGY
passport.use('google', new GoogleTokenStrategy({
    clientID: OAUTH.GOOGLE.CLIENT_ID,
    clientSecret: OAUTH.GOOGLE.CLIENT_SECRET,
    scope: ['profile email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
       const existingUser = await User.findOne({'google.oauthId': profile.id })
        if (existingUser) {
            return done(null, existingUser)
        }
        const newUser = new User({
            method: 'google',
            google: {
                oauthId: profile.id,
            },
            username: `g${Date.now()}`,
            email: profile.emails[0].value,
            type: 'employer'
        })
        await newUser.save()
        done(null, newUser)
    }catch (err) {
       done(err, false, err.message)
    }
}))

// FACEBOOK OAUTH SRATEGY
passport.use('facebook', new FacebookTokenStrategy({
    clientID: OAUTH.FACEBOOK.CLIENT_ID,
    clientSecret: OAUTH.FACEBOOK.CLIENT_SECRET,
}, async (accessToken, refreshToken, profile, done) => {
    try {
        const existingUser = await User.findOne({ 'facebook.oauthId': profile.id })
        if(existingUser) {
            return done(null, existingUser)
        }
        const newUser = new User({
            method: 'facebook',
            facebook: {
                oauthId: profile.id,
            },
            username: `f${Date.now()}`,
            email: profile.emails[0].value,
            type: 'employer'
        })
        await newUser.save()
        done(null, newUser)
    } catch (err) {
        done(err, false, err.message)
    }
}))

// LOCAL STRATEGY
passport.use( new LocalStrategy({ // Local Strategy to check email and password is Valid ? ( SignIn )
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ $or: [{ username: email }, { email }] })  // Find the
        // user
        // given the email' +
        if (!user) {  // If not, handle it
            return done(null, false)
        }
        const isMatch = await user.isValidPassword(password)  // Check if the password is correct
        if (!isMatch) {    //If not, handle it
            return done(null, false)
        }
        done(null, user)  // Otherwise, return the user
    } catch (err) {
        done(err, false)
    }
}))
