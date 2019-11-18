const Category = require('../../models/Category')
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
