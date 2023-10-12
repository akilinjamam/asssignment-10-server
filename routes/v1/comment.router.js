const express = require('express');
const router = express.Router();

const commentController = require('../../controller/comment.controller');


router.route('/create-comment').post(commentController.createCommentController);

router.route('/').get(commentController.getCommentController);

router.route('/:id').delete(commentController.deleteCommentController);


module.exports = router;