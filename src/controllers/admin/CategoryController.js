const Category = require('../../models/Category')

module.exports = {
    getAll: async (req, res, next ) => {
        const categories = await Category.find()
        res.status(200).json({ categories })
    }
}
