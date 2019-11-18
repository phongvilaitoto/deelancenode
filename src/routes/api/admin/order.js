const express = require('express')
const router = express.Router()

const OrderController = require('../../../controllers/admin/OrderController')

router.route('/get-all')
    .get(OrderController.getAll)

router.route('/confirm-payment')
    .put(OrderController.confirmPayment)

router.route('/cancel-payment')
    .put(OrderController.cancelPayment)

router.route('/order-fail')
    .put(OrderController.orderFail)

module.exports = router
