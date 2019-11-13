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
    createdAt: {
        type: Date,
        default: Date.now()
    },
    approved : {
        type: Boolean,
        default: false
    },
    // Relation
    author: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }
}, { versionKey: false })

const Portfolio = mongoose.model('portfolios', portfolioSchema)

module.exports = Portfolio
