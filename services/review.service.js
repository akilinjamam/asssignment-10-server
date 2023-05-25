const Review = require("../models/reviews")


module.exports.createReviewsService = async (data) => {
    const review = await Review.create(data);
    return review;
}

