const express = require('express')
const router= express.Router()

// Controller
const HomeController = require('../../controllers/HomeController')

router.route('/')
    .get(HomeController.home)
router.route('/detail')
    .get(HomeController.detail)
router.route('/filtercategory')
    .get(HomeController.filterCategory)
router.route('/search')
    .get(HomeController.searchPortfolio)
router.route('/alsolike')
    .get(HomeController.alsolike)

module.exports = router
