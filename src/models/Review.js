const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    portfolioId: {
        type: Schema.Types.ObjectId,
        ref: 'portfolios',
        required: true
    },
}, {  autoIndex: true, timestamps: true , versionKey: false })

const Review = mongoose.model('reviews', reviewSchema)

module.exports = Review
