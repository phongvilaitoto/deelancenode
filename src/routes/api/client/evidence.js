const express = require('express')
const router = express.Router()

const EvidenceController = require('../../../controllers/client/EvidenceController')
const upload = require('../../../plugins/multer/evidence')

router.route('/post')
    .post(upload.single('image'),EvidenceController.post)

module.exports = router
