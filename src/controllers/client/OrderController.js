const Order = require('../../models/Order')
const User = require('../../models/User')
const Portfolio = require('../../models/Portfolio')
const Message = require('../../models/Message')

module.exports = {
    // for employer and freelancer
    orders: async (req, res, next) => {
        const { authId } = req.query

        const orders = await Order.find({
                $or: [ { employerId: authId }, { freelancerId: authId } ],
            })
            .populate(['employerId', 'freelancerId', 'portfolioId'])
            .sort('-createdAt')
        res.status(200).json({ orders })
    },

    currentOrder: async (req, res, next) => {
        const { _id } = req.query
        const order = await Order.findOne({ _id })
            .populate(['employerId', 'freelancerId', 'portfolioId', 'reviewId', 'userId'])
        res.status(200).json({ order })
    },

    // for freelancer only
    ordersTask: async (req, res, next) => {
        const { authId } = req.query
        const orders = await Order.find({ freelancerId: authId })
            .populate(['employerId', 'freelancerId', 'portfolioId'])
            .sort('-createdAt')
        res.status(200).json({ orders })
    },

    createOrder: async (req, res, next) => {
        try {
            const { employerId, freelancerId, portfolioId, message  } = req.body
            const order = await new Order
            const employer = await User.findById(employerId)
            order.employerId = employer
            const freelancer = await User.findById(freelancerId)
            order.freelancerId = freelancer
            const portfolio = await Portfolio.findById(portfolioId)
            order.portfolioId = portfolio
            await order.save()
            // create Message
            const messageModel = await new Message({
                message,
                from: employerId,
                to: freelancerId,
            })
            const orderM = await Order.findById(order._id)
            messageModel.orderId = orderM
            const portfolioM = await Portfolio.findById(portfolioId)
            messageModel.portfolioId = portfolioM
            await messageModel.save()
            res.status(201).json({ orderId: order._id })
        }catch (e) {
            throw new Error(e)
        }
    },
    updateQuotation: async (req, res, next) => {
        try {
            const { _id, information, price, dayWork, receive, optional } = req.body
            const { from, to, orderId, type, portfolioId } = req.body
            await Order.updateOne({ _id }, {
                $set: {
                    'quotation.information': information,
                    'quotation.price': price,
                    'quotation.dayWork': dayWork,
                    'quotation.receive':receive,
                    'quotation.optional':optional,
                    'quotation.createdAt': Date.now(),
                    'quotation.paymentStatus': false,
                    'quotation.workStatus': 'wait for payment'
                }
            })
            const messageModel = new Message({
                from,
                to,
                type
            })
            const order = await Order.findById(orderId)
            messageModel.orderId = order
            const portfolio = await Portfolio.findById(portfolioId)
            messageModel.portfolioId = portfolio
            await messageModel.save()
            res.status(200).json({ success: 'quotation has been updated' })
        } catch (e) {
            throw new Error(e)
        }
    },

    orderPending: async (req, res, next) => {
        const { _id } = req.body
       const order = await Order.updateOne({ _id }, {
          $set: { 'quotation.workStatus': 'pending' }
      })
        res.status(200).json({ success: 'pending has been updated' })
    },

    orderApprove: async (req, res, next) => {
        const { _id } = req.body
        const order = await Order.updateOne({ _id }, {
            $set: { 'quotation.workStatus': 'successful' }
        })
        res.status(200).json({ success: 'order has been completed' })
    }
}

