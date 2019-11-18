const express = require('express')
const router = express.Router()
const OrderController = require('../../../controllers/client/OrderController')

router.route('/orders')
    .get(OrderController.orders)

router.route('/current-order')
    .get(OrderController.currentOrder)

router.route('/create-order')
    .post(OrderController.createOrder)

router.route('/update-quotation')
    .put(OrderController.updateQuotation)

router.route('/order-pending')
    .put(OrderController.orderPending)

router.route('/order-approve')
    .put(OrderController.orderApprove)

module.exports = router
