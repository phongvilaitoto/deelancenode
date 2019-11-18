const User = require('../../models/User')
const Message = require('../../models/Message')
const Order = require('../../models/Order')
const gm = require('gm').subClass({ imageMagick: true })

module.exports = {

    userMessage: async (req, res, next) => {
         const { orderId } = req.query
         const messages = await Message.find({ orderId })
             .populate(['orderId'])
        res.status(200).json({ messages })
    },

    send: async (req, res, next) => {
        try {
            const { message, from, to, orderId } = req.body
            if (req.file) { // if has file image
                /// Reisize
                const filePath = req.file.path
                let width = 600
                let height = 600
                await gm(req.file.path)
                    .resize(width, height)
                    .gravity('Center')
                    .noProfile()
                    .write(req.file.path ,(err) => { // write a new file
                        if(err) return res.json({ error: err })
                    })
                // Update Profile
                const image = 'uploads/message/' + req.file.filename // save new path to mongodb
                // new message
                const messages = new Message({
                    message,
                    from,
                    to,
                    image
                })
                const order = await Order.findById(orderId)
                messages.orderId = order
                await messages.save()
                res.status(200).json({ messages })
            } else {
                const messages = new Message({
                    message,
                    from,
                    to
                })
                const order = await Order.findById(orderId)
                messages.orderId = order
                await messages.save()
                res.status(200).json({ messages })
            }

        }
        catch (e) {
            throw new Error(e)
        }
    }
}
