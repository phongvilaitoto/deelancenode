const express = require('express') // Express
const router = express.Router() // Router
const ProfileController = require('../../../controllers/client/ProfileController') // Controller
const upload = require('../../../plugins/multer/profile')

// Middleware
const passport = require('passport')
const passportConf = require('../../../middleware/client/auth') // changed passport plugin
const isFreelancer =  passport.authenticate('freelancer', { session: false }) // check Auth


// Update profile
router.route('/update')
    .put(upload.single('image')  ,ProfileController.update)

router.route('/freelance-register')
    .put(ProfileController.freelanceRegister)
// Only Freelancer
router.route('/ready')
    .put([ isFreelancer ], ProfileController.ready)

// Export router
module.exports = router
