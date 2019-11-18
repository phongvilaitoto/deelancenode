const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    approved : {
        type: Boolean,
        default: false
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
},{  autoIndex: true, timestamps: true , versionKey: false })

const Portfolio = mongoose.model('portfolios', portfolioSchema)

module.exports = Portfolio
