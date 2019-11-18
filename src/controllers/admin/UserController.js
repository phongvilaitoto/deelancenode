const User = require('../../models/User')

module.exports = {
    getAll: async (req, res, next) => {
        const users = await User.find()
        res.status(200).json({ users })
    }
}
