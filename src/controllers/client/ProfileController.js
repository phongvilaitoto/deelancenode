const User = require('../../models/User')
const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true })

module.exports = {
    update:  async  (req, res, next) => {
            try {
                const { _id, username, name, lastname, phone, facebook, whatsapp, skill, history } = req.body // const as object request
                const user = await User.findOne({ _id }) // find auth user
                    if(req.file) { // if has file image
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
                        const image = 'uploads/profile/' + req.file.filename // save new path to mongodb
                        const oldImage = 'public/' + user.image // directory older image
                        await User.updateOne({ _id }, // update auth
                            {$set: { name, lastname, image, phone, facebookAccount: facebook, whatsapp, skill, history }}, (err) => {
                                if(err)  return res.json({ error: err })
                            })
                        await fs.exists(oldImage, (exists) => {
                            if(exists) {
                                fs.unlinkSync(oldImage)
                            }
                        })
                    }else{
                        await User.updateOne({ _id },
                            {$set: {  name, lastname, phone, facebookAccount: facebook, whatsapp, skill, history }}, (err) => {
                                if(err)  return res.json({ error: err })
                            })
                    }
                if (response.headersSent) {
                    console.log('Headers sent!')
                } else {
                    console.log('Headers have not been sent.')
                }
                res.writeHead(200)
                if (response.headersSent) {
                    console.log('Headers sent!')
                } else {
                    console.log('Headers have not been sent.')
                }
                res.json({ success: 'updated profile successfully' })
            } catch (e) {
                throw new Error(e)
            }
    },
    ready: async (req, res, next) => {
        try {
            const { _id ,ready } = req.body
            await User.updateOne({ _id },
                {$set: { acceptOrder: ready }}, (err) => {
                    if(err)  return res.json({ error: err })
                })
            res.status(200).json({ success: 'updated ready successfully' })
        }catch (e) {
            throw new Error(e)
        }
    }
}
