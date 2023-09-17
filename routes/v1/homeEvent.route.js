const express = require('express');
const router = express.Router();



const homeEventController = require('../../controller/homeEvent.controller');

// const uploader = require('../../middleware/uploader');

// router.post('/file-uploades', uploader.single('image'), homeEventController.fileUpload)

router.route('/')
    .post(homeEventController.saveHomeEvent)
    .get(homeEventController.getHomeEvent)

router.route('/:id')
    .get(homeEventController.getHomeEventById)
    .delete(homeEventController.deleteHomeEventById)
    .patch(homeEventController.updateHomeEventById)

module.exports = router;