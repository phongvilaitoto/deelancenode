const express = require('express')
const router = express.Router()
const OrderController = require('../../../controllers/client/OrderController')

// Middleware
const passport = require('passport')
const passportConf = require('../../../middleware/client/auth') // changed passport plugin
const isFreelancer =  passport.authenticate('freelancer', { session: false }) // check Auth


// For all type
router.route('/orders')
    .get(OrderController.orders)

router.route('/current-order')
    .get(OrderController.currentOrder)

router.route('/create-order')
    .post(OrderController.createOrder)

// Middleware Only Freelancer
router.route('/orders-task') // for task freelancer
    .get([ isFreelancer ], OrderController.ordersTask)

router.route('/update-quotation')
    .put([ isFreelancer ], OrderController.updateQuotation)

router.route('/order-pending')
    .put([ isFreelancer ], OrderController.orderPending)

// Edit
router.route('/order-approve') // wait
    .put(OrderController.orderApprove)

module.exports = router
