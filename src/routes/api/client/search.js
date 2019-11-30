const express = require('express')
const router = express.Router()
const SearchController = require('../../../controllers/client/SearchController')

router.route('/')
    .get(SearchController.search)

module.exports = router
