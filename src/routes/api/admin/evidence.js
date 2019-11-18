const express = require('express')
const router = express.Router()

const EvidenceController = require('../../../controllers/admin/EvidenceController')

router.route('/get-all')
    .get(EvidenceController.getAll)

module.exports = router
