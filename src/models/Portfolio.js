const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = require('./Order')
const Review = require('./Review')
const Message = require('./Message')

const fs = require('fs')

const portfolioSchema = new Schema({
    images: {
        type: Array
    },
    title: {
        type: String,
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['wait for approval', 'approved', 'edit', 'hidden']
    },
    // Relation
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    }]
},
    {  autoIndex: true, timestamps: true , versionKey: false })

// Search
portfolioSchema.index({ title: 'text' });

// Remove clear ref
portfolioSchema.pre('remove', async function (next) {
    const messages = await Message.find({ portfolioId: this._id })
    messages.forEach(message => {
        if(message.image) {
            const allMessageImage = 'public/' + message.image // directory older image
            fs.exists(allMessageImage, (exists) => {   // if file exists in public
                if(exists) {
                    fs.unlinkSync(allMessageImage)     // delete this file
                }
            })
        }
    })
    await Message.deleteMany({ portfolioId: this._id })
    await Order.deleteMany({ portfolioId: this._id })
    await Review.deleteMany({ portfolioId: this._id })
})

const Portfolio = mongoose.model('portfolios', portfolioSchema)

module.exports = Portfolio
