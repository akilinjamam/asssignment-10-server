const express = require('express');
const router = express.Router();


const messageController = require('../../controller/message.controller');

router.route('/create-message')
    .post(messageController.createMessageController)

module.exports = router;