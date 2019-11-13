const express = require('express')
const router = express.Router()

// Controller
const CategoryController = require('../../controllers/CategoryController')
// upload
const upload = require('../../plugins/multer/category')

router.route('/getall')
    .get(CategoryController.getAll)

router.route('/getone')
    .get(CategoryController.getOne)

router.route('/post')
    .post(upload.single('image'), CategoryController.post)

router.route('/update')
    .put(upload.single('image'), CategoryController.update)

router.route('/delete')
    .delete(CategoryController.delete)

module.exports = router
