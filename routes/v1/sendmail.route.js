const express = require('express');
const router = express.Router();



const mailController = require('../../controller/sendmal.controller');

// const uploader = require('../../middleware/uploader');

// router.post('/file-uploades', uploader.single('image'), homeEventController.fileUpload)

router.route('/')
    .post(mailController.postMail)


module.exports = router;