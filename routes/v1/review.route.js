const express = require('express');
const router = express.Router();

const reviewRouter = require('../../controller/review.controller');


router.route('/')
    .post(reviewRouter.createReviewsController)
    .get(reviewRouter.getReviewsController)

module.exports = router;