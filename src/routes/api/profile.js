const express = require('express') // Express
const router = express.Router() // Router
const ProfileController = require('../../controllers/ProfileController') // Controller
const upload = require('../../plugins/multer/profile')

// Update profile
router.route('/update')
    .put(upload.single('image')  ,ProfileController.update)
router.route('/ready')
    .put(ProfileController.ready)

// Export router
module.exports = router
