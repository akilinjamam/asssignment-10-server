const express = require('express');

const router = express.Router();

const bannerController = require('../../controller/bannerEvent.controller')


router.route('/')
    .post(bannerController.saveBannerEvents)
    .get(bannerController.getBannerEvents)


router.route('/:id')
    .delete(bannerController.deleteBannerEvents)
    .patch(bannerController.updateBannerEvents)



module.exports = router;