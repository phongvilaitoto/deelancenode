const Evidence = require('../../models/Evidence')

module.exports = {
    getAll: async (req, res, next) => {
        const evidences = await Evidence.find()
        res.status(200).json({ evidences })
    }
}
