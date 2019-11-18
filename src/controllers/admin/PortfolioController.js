const Portfolio = require('../../models/Portfolio')

module.exports = {
    getAll: async (req, res, next) => {
        const portfolios = await Portfolio.find()
            .populate(['author', 'categoryId'])
        res.status(200).json({ portfolios })
    }
}
