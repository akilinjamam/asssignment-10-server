const express = require('express');
const router = express.Router();



const paymentController = require('../../controller/payment.controller');

router.route('/')
    .get(paymentController.getPaymentController)

router.route('/create-payment')
    .post(paymentController.savePaymentController);

router.route('/success')
    .post(paymentController.successPaymentController);

router.route('/:id').patch(paymentController.updatePaymentController)


module.exports = router;