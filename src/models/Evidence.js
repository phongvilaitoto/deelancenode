const mongoose = require('mongoose')
const Schema = mongoose.Schema
const evidenceSchema = new Schema({
    orderId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    confirmed: {
        type: Boolean,
        default: false
    }
}, {  autoIndex: true, timestamps: true , versionKey: false })

const Evidence = mongoose.model('evidences', evidenceSchema)

module.exports = Evidence
