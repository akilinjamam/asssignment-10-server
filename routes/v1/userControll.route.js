const express = require('express');
const router = express.Router();

const userControllController = require('../../controller/userControll.controller');


router.route('/')
    .post(userControllController.saveUserControll)
    .get(userControllController.getUserControll)

router.route('/:id')
    .patch(userControllController.updateUserControll)


module.exports = router;