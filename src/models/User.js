const mongoose = require('mongoose') // require mongoose from mongodb.js
const Schema = mongoose.Schema // require Schema from mongodb.js
const bcrypt = require('bcryptjs') // require bcrypt
const shortid = require('shortid') // require shortid

const userSchema = new Schema({ // use new Schema to protect User Model
    method: {
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },
    type: {
      type: String,
      enum: ['employer', 'freelancer'],
      required: true
    },
    // schema all
    username: {
        type: String,
        default: shortid.generate,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    image: {
        type: String
    },
    nickname: {
      type: String
    },
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    phone: {
        type: String
    },
    village: {
       type: String
    },
    district: {
       type: String
    },
    province: {
        type: String
    },
    skill: {
        type: String
    },
    workHistory: {
        type: String
    },
    acceptOrder: {
        type: Boolean,
        default: false
    },
    acceptFreelancer: {
      type: String,
      enum: ['wait', 'edit', 'cancel', 'freelancer']
    },
    // local auth schema
    local: {
        password: {
            type: String,
        }
    },
    // google oauth schema
    google: {
        oauthId: {
            type: String
        },
    },
    // facebook oauth schema
    facebook: {
        oauthId: {
            type: String
        },
    }
}, {  autoIndex: true, timestamps: true , versionKey: false }) // version key to inject

userSchema.pre('save', async function (next) { // Pre save() + hash
     try {
         if(this.method === 'google') {
             next()
         }
         if(this.method === 'facebook') {
             next()
         }
         const salt = await bcrypt.genSalt(10)  // Generate a salt
         const passwordHash = await bcrypt.hash(this.local.password, salt)  // Generate a password hash ( salt, hash )
         this.local.password = passwordHash  // Re-assign hashed version over original, plain text password
         next()
     } catch (err) {
         throw new Error(err)
     }
})

userSchema.methods.isValidPassword = async function (newPassword) { // Check isValidPassword
    try {
       return await bcrypt.compare(newPassword, this.local.password) // compare password & hash
    } catch(err) {
        throw new Error(err)
    }
}

const User =  mongoose.model( 'users', userSchema ) // Create a models

module.exports =  User // Export User Model
