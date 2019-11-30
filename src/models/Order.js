const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shortid = require('shortid')

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
    reviewId: {
        type: Schema.Types.ObjectId,
        ref: 'reviews'
    },
    // Quotation
    quotation: {
        orderId: {
            type: String,
            default: shortid.generate,
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
        createdAt: {
            type: Date
        }
        // ee
        // complete: {
        //     type: Boolean,
        //     default: false
        // },
    },
    // Generate Key Id
}, {  autoIndex: true, timestamps: true , versionKey: false })

orderSchema.pre('remove', async function (next) {
    next()
})


const Order = mongoose.model('orders', orderSchema)

module.exports = Order
