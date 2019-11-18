const express = require('express')
const router = express.Router()
const PortfolioController = require('../../../controllers/admin/PortfolioController')

router.route('/get-all')
    .get(PortfolioController.getAll)

module.exports = router
