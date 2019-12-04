const Category = require('../../models/Category')
const Portfolio = require('../../models/Portfolio')
const Review = require('../../models/Review')
const gm = require('gm').subClass({ imageMagick: true })
const fs = require('fs')

module.exports = {
    getAll: async (req, res, next) => {
        const categories = await Category.find({})
        res.status(200).json({ categories })
    },

    getOne: async (req, res, next) => {
        const { _id } = req.query
        const category = await Category.findOne({ _id })
        res.status(200).json({ category })
    },



    filterCategory: async (req, res, next) => {
        try {
            const { categoryId, rating = 'all' } = req.query
            const ports = await Portfolio.find({
                    categoryId,
                    status: 'approved'
                })
                .populate(['reviews', 'categoryId', 'author'])
            ports.forEach((portfolio) => {  // avarage rating
                const length = portfolio.reviews.length
                const arr = portfolio.reviews.map(i=>i.rating)
                const sum = arr.reduce((a, b) => a + b, 0)
                portfolio.rateAvg = sum/length
            })
            const portfolios = ports.filter((port) => {  // filter only rating >= query.rating
                if(rating === 'all') {
                    return port
                } else if (rating === 'null') {
                    return port.reviews.length === 0
                }
                return port.rateAvg >= rating
            })
                .sort((a, b) => {
                    if(rating === 'all') {
                        if(isNaN(b.rateAvg) && isNaN(a.rateAvg) ){
                            return -b.createdAt
                        }
                        return b.rateAvg - a.rateAvg
                    } else if (rating === 'null') {
                        return -b.createdAt
                    }
                    return b.rateAvg - a.rateAvg
                   })
            res.status(200).json({ portfolios })
        } catch (e) {
            throw new Error(e)
        }
    },

    post: async (req, res, next) => {
        try{
            const { name } = req.body
            let width = 600
            let height = 600
            gm(req.file.path)
                .resize(width, height)
                .gravity('Center')
                .noProfile()
                .write(req.file.path ,(err) => { // write a new file
                    if(err) return res.json({ error: err })
                })
            const image = 'uploads/category/' + req.file.filename // save new path to mongodb
            const category = new Category({ name, image })
            await category.save()
            res.status(201).json({ success: 'Category has been created' })
        } catch (err) {
            throw new Error(err)
        }
    },

    update: async (req, res, next) => {
        try{
            const { name } = req.body
            const { _id } = req.query

            if(req.file){
                let width = 600
                let height = 600
                gm(req.file.path)
                    .resize(width, height)
                    .gravity('Center')
                    .noProfile()
                    .write(req.file.path ,(err) => { // write a new file
                        if(err) return res.json({ error: err })
                    })
                const category = await Category.findOne({ _id }) // find Category
                const image = 'uploads/category/' + req.file.filename // save new path to mongodb
                const oldImage = 'public/' + category.image // directory older image
                await Category.updateOne({ _id }, {
                    $set: { name, image }
                })
                fs.exists(oldImage, (exists) => { // if file exists in public
                    if(exists) {
                        fs.unlinkSync(oldImage) // delete this file
                    }
                })
            }else {
                await Category.updateOne({ _id }, {
                    $set: { name }
                })
            }
            res.status(200).json({ success: 'Update category successfully' })
        }catch (err) {
            throw new Error(err)
        }
    },

    delete: async (req, res, next) => {
        try {
            const { _id } = req.query
            const category = await Category.findOne({ _id })
            const oldImage = 'public/' + category.image // directory older image
            fs.exists(oldImage, (exists) => { // if file exists in public
                if(exists) {
                    fs.unlinkSync(oldImage) // delete this file
                }
            })
            await category.delete()
            res.status(200).json({ success: 'Category has been deleted' })
        }catch (err) {
            throw new Error(err)
        }
    }
}
