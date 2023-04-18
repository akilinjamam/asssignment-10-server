const express = require('express');
const router = express.Router();

const userCartController = require('../../controller/userCart.controller');


router.route('/bulk-update')
    .patch(userCartController.updateUserCartById)

router.route('/bulk-delete')
    .post(userCartController.deleteUserCartByBulk)

router.route('/')
    .post(userCartController.saveUserCart)
    .get(userCartController.getuserCartByEmail)

router.route('/getAll').get(userCartController.getUserCart);


router.route('/:id')
    .patch(userCartController.updateUserCartByOnlyId)
    .get(userCartController.getuserCartById)
    .delete(userCartController.deleteUserCartByOnlyId)



module.exports = router;