const express = require('express')
const router = express.Router()

const ReviewController = require('../../../controllers/client/ReviewController')

router.route('/get-all')
    .get(ReviewController.getAll)

router.route('/post')
    .post(ReviewController.post)

router.route('/update-review')
    .put(ReviewController.updateReview)

module.exports = router
