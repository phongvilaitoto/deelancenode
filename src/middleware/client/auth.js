const passport = require('passport') // require passport
const { ExtractJwt } = require('passport-jwt') // require ExtractJWT
const JwtStrategy = require('passport-jwt').Strategy // require JWT Strategy
const { JWT_SECRET } = require('../../configuration/main')  // requrie secret key
const User = require('../../models/User') // require User Model

// isAuth
passport.use('auth', new JwtStrategy({ // Use Strategy to find token from a user ( check Auth, return user from db )
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

// is Freelancer
passport.use('freelancer', new JwtStrategy({ // Use Strategy to find token from a user ( check Auth, return user from
// db )
    jwtFromRequest:  ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub)  // Find the user specified in token
        if(user.type !== `freelancer`) {  // If user doesn't exists, handle it
            return done(null, false)
        }
        done(null, user)  // Otherwise, return the user
    } catch (e) {
        done(e, false)
    }
}))

// is Employer
passport.use('employer', new JwtStrategy({ // Use Strategy to find token from a user ( check Auth, return user from
// db )
    jwtFromRequest:  ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub)  // Find the user specified in token
        if(user.type !== `employer`) {  // If user doesn't exists, handle it
            return done(null, false)
        }
        done(null, user)  // Otherwise, return the user
    } catch (e) {
        done(e, false)
    }
}))
