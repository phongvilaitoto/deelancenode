const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    orderId: {
        type: Schema.Types.ObjectId,
        ref: 'orders',
        required: true,
    },
    message: {
        type: String
    },
    image: {
        type: String
    },
    type: {
        type: String,
        enum: ['quotation']
    }
}, { versionKey: false })

const Message = mongoose.model('messages', messageSchema)

module.exports = Message
