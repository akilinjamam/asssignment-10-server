const Review = require("../models/reviews")


module.exports.createReviewsService = async (data) => {
    const review = await Review.create(data);
    return review;
}

module.exports.getReviewService = async () => {
    const review = await Review.find({});
    return review;
}