const express = require('express')
const router = express.Router()

const UserController = require('../../../controllers/admin/UserController')

router.route('/get-all')
    .get(UserController.getAll)

router.route('/freelance-register')
    .put(UserController.freelanceRegister)

module.exports = router
