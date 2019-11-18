const express = require('express')
const router = express.Router()

const UserController = require('../../../controllers/admin/UserController')

router.route('/get-all')
    .get(UserController.getAll)

module.exports = router
