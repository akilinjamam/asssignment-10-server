const express = require('express');
const router = express.Router();


const globalEventController = require('../../controller/globalEvent.controller');


router.route('/')
    .post(globalEventController.saveGlobalEvent)
    .get(globalEventController.getGlobalEvent)

router.route('/:id')
    .get(globalEventController.getGlobalEventbyId)
    .delete(globalEventController.deleteGlobalEventbyId)
    .patch(globalEventController.updateGlobalEventbyId)

module.exports = router;