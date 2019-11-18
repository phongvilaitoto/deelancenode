const Review = require('../../models/Review')
const Portfolio = require('../../models/Portfolio')
const Order = require('../../models/Order')
const User = require('../../models/User')

module.exports = {
    getAll: async (req, res, next) => {
        const { portfolioId } = req.query
        const reviews = await Review.find({ portfolioId })
            .populate([ 'userId' ])
            .sort('-createdAt')
        res.status(200).json({ reviews })
    },
    post: async (req, res, next) => {
        const { text, rating, portfolioId, orderId, userId } = req.body
        const review = new Review({
            text,
            rating
        })
        const portfolio = await Portfolio.findById(portfolioId)
        review.portfolioId = portfolio
        const user = await User.findById(userId)
        review.userId = user
        await review.save()
        portfolio.reviews.push(review)
        await portfolio.save()
        const order = await Order.findById(orderId)
        order.reviewId = review
        await order.save()
        res.status(201).json({ success: 'Review successfully' })
    },
    updateReview: async (req, res, next) => {
        const { reviewId, text, rating } = req.body
        await Review.updateOne({ _id: reviewId  }, {
            $set: { text, rating }
        })
        res.status(200).json({ success: 'Review updated successfully' })
    }
}


