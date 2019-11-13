const express = require('express')
const router = express.Router()

// Portfolio Controller
const PortfolioController = require('../../controllers/PortfolioController')

// multer
const upload = require('../../plugins/multer/portfolio')

// get all by userId portfolio
router.route('/getall')
    .get(PortfolioController.getall)

// get one portfolio deatil
router.route('/getone')
    .get(PortfolioController.getone)

// post
router.route('/post')
    .post(upload.array('images', 5) ,PortfolioController.post)

//update
router.route('/update')
    .put(upload.array('images', 5), PortfolioController.update)

// delete
router.route('/delete')
    .delete(PortfolioController.delete)

module.exports = router
