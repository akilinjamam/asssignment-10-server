const express = require('express');
const router = express.Router();

const likeController = require('../../controller/like.controller');


router.route('/create-like').post(likeController.createLikeController);

router.route('/').get(likeController.getLikeController);
router.route('/:id').delete(likeController.deleteLikeController);



module.exports = router;