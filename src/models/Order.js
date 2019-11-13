const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    employerId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    freelancerId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    portfolioId: {
        type: Schema.Types.ObjectId,
        ref: 'portfolios',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    // Quotation
    quotation: {
        orderId: {
            type: String,
            unique: true
        },
        information: {
            type: String,
        },
        price: {
            type: Number,
        },
        dayWork: {
            type: Number,
        },
        receive: {
            type: String,
        },
        optional: {
            type: String
        },
        paymentStatus: {
            type: Boolean
        },
        // maybe
        workStatus: {
            type: String,
            enum: [ 'wait for payment' ,'in progress', 'pending', 'successful', 'unsuccessful'],
        },
        // ee
        // complete: {
        //     type: Boolean,
        //     default: false
        // },
        createdAt: {
            type: Date
        }
    }
    // Generate Key Id
}, { versionKey: false })

const Order = mongoose.model('orders', orderSchema)

module.exports = Order
