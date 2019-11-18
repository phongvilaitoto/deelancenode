const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    }
}, {  autoIndex: true, timestamps: true , versionKey: false })

const Category = mongoose.model('categories', categorySchema)

module.exports = Category
