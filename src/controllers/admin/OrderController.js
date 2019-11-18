const Order = require('../../models/Order')
const Evidence = require('../../models/Evidence')


module.exports = {
    getAll: async (req, res, next) => {
        const orders = await Order.find()
            .populate([ 'employerId', 'freelancerId' ])
        res.status(200).json({ orders })
    },
    confirmPayment: async (req, res, next) => {
        const { orderId } = req.body
        await Order.updateOne({ 'quotation.orderId': orderId }, {
            $set: { 'quotation.paymentStatus': true ,'quotation.workStatus': 'in progress' }
        })
        await Evidence.updateOne({ orderId }, {
            $set: { confirmed: true }
        })
        res.status(200).json({ success: 'order has been payment!' })
    },
    cancelPayment: async (req, res, next) => {
        const { orderId } = req.body
        await Order.updateOne({ 'quotation.orderId': orderId }, {
            $set: { 'quotation.paymentStatus': false ,'quotation.workStatus': 'wait for payment' }
        })
        await Evidence.updateOne({ orderId }, {
            $set: { confirmed: false }
        })
        res.status(200).json({ success: 'payment has been cancel!' })
    },
    orderFail: async (req, res, next) => {
        const { orderId } = req.body
        await Order.updateOne({ 'quotation.orderId': orderId }, {
            $set: { 'quotation.workStatus': 'unsuccessful' }
        })
        res.status(200).json({ success: 'order failed' })
    }
}
