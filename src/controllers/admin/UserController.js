const User = require('../../models/User')

module.exports = {
    getAll: async (req, res, next) => {
        const users = await User.find()
        res.status(200).json({ users })
    },
    freelanceRegister: async (req, res, next) => {
        const { userId, type, acceptFreelancer } = req.body
        await User.updateOne({ _id: userId }, {
            $set: {
                type,
                acceptFreelancer
            }
        })
        res.status(200).json({ success: 'update successful' })
    }
}
