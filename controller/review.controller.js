const { createReviewsService } = require("../services/review.service")

module.exports.createReviewsController = async (req, res) => {

    try {
        const review = await createReviewsService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'review is created successfuylly',
            result: review
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }

}