const Evidence = require('../../models/Evidence')
const gm = require('gm').subClass({ imageMagick: true })

module.exports ={
    post: async (req, res, next) => {
       try {
           const { orderId, description } = req.body
           let width = 600
           let height = 600
           gm(req.file.path)
               .resize(width, height)
               .gravity('Center')
               .noProfile()
               .write(req.file.path ,(err) => { // write a new file
                   if(err) return res.json({ error: err })
               })
          const image = 'uploads/evidence/' + req.file.filename // save new path to mongodb
           const evidence = new Evidence({
               orderId,
               description,
               image
           })
           await evidence.save()
           res.status(201).json({ success: 'evidence has been sended' })
       } catch (e) {
           throw new Error(e)
       }
    }
}
