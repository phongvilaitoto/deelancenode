const express = require('express')
const router = express.Router()
const MessageController = require('../../../controllers/client/MessageController')
const upload = require('../../../plugins/multer/message')

router.route('/send')
    .post(upload.single('image'), MessageController.send)

router.route('/user-message')
    .get(MessageController.userMessage)

module.exports = router
