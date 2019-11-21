const Portfolio = require('../../models/Portfolio')
const User = require('../../models/User')
const Category = require('../../models/Category')
const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true })

module.exports = {

    // Gett all portfolio as userId
    getall: async (req, res, next) => {
        try {
            const { userId } = req.query
            const portfolios = await Portfolio.find({ author: userId }).populate('categoryId')
            res.status(200).json({ portfolios })
        } catch (err) {
            throw new Error(err)
        }
    },

    // Get a porfolio by Id
    getone: async (req, res, next) => {
        try {
            const { _id } = req.query
            const portfolio = await Portfolio.findOne({ _id }).populate('categoryId')
            res.status(200).json({ portfolio })
        } catch (err) {
            throw new Error(err)
        }
    },

    // post portfolio
    post: async (req, res, next) => {
        try {
            // Resize
            const filePath = req.files.map(i => i.path)
            let width = 900
            let height = 900
            filePath.forEach(file=>{
                gm(file)
                    .resize(width, height)
                    .gravity('Center')
                    .noProfile()
                    .write(file ,(err) => { // write a new file
                        if(err) return
                    })
            })
            // Create new
            const { userId, title, description, categoryId } = req.body // const object from request
            const images = req.files.map(i =>  `uploads/portfolio/${ i.filename }` ) // maping files in array
            const newPortfolio = new Portfolio({ images , title, description, categoryId }) // create a new portfolio
            const user = await User.findById(userId) // Find userId
             newPortfolio.author = user // join
            const category = await Category.findById(categoryId)
             newPortfolio.categoryId = category // join
            await newPortfolio.save() // save portfolio with author
            res.status(201).json({ success: 'post portfolio successfully' })
        } catch (err) {
            throw new Error(err)
        }
    },

    // Updatee portfolio
    update: async (req, res, next) => {
        try {
            const { title, description, imgPath, images, categoryId } = req.body
            const { _id } = req.query
            const files = req.files.map(i =>  `uploads/portfolio/${ i.filename }` ) // maping files in array
            // Resize
            const filePath = req.files.map(i => i.path)
            let width = 900
            let height = 900
            filePath.forEach(file => {
                gm(file)
                    .resize(width, height)
                    .gravity('Center')
                    .noProfile()
                    .write(file ,(err) => { // write a new file
                        if(err) return
                    })
            })
            if(images) { // if has current images
                // concat current and new in array
                const currentImages = images.map(i=>i) // maping current images
                const concatImages = currentImages.concat(files) // concat array images
                await Portfolio.updateOne({ _id },
                    { $set: { title, description, images: concatImages, categoryId } }, (err) => {
                        if (err) {
                            return
                        }
                    } )
            }else if(!images) { // if current images is null
                await Portfolio.updateOne({ _id },
                    { $set: { title, description, images: files, categoryId } }, (err) => {
                        if (err) {
                            return
                        }
                    } )
            }
            if(imgPath) { // if imgPath has splice
                const deeleteImage = imgPath.map(i=>`public/${i}`)
                await deeleteImage.forEach(image => { // forEach is loop for Array && for is loop for object
                    fs.exists(image, (exists) => { // if file exists in public
                        if(exists) {
                            fs.unlinkSync(image) // delete this file
                        }
                    })
                })
            }
            res.status(200).json({ success: 'post portfolio successfully' })
        } catch (err) {
            throw new Error(err)
        }
    },

    // Delete portfolio
    delete: async (req, res, next) => {
        try {
            const { _id } = req.query // const { _id } from request params
            const portfolio = await Portfolio.findOne({ _id })// find this portfolio
            const images = portfolio.images.map(i => `public/${ i }`) // maping images in array
            if(images) { // if images not null
                images.forEach(image => { // forEach is loop for Array && for is loop for object
                    fs.exists(image, (exists) => { // if file exists in public
                        if(exists) {
                            fs.unlinkSync(image) // delete this file
                        }
                    })
                })
            }
            await portfolio.delete() // delete portfolio
            res.status(200).json({ success: 'Deelete portfolio successfully' }) // return response
        } catch (err) {
            throw new Error(err)
        }
    }

}
