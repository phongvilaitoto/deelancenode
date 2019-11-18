const express = require('express')
const router = express.Router()

const CategoryController = require('../../../controllers/admin/CategoryController')

router.route('/get-all')
    .get(CategoryController.getAll)

module.exports = router
