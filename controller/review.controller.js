const { createReviewsService, getReviewService, deleteReviewService } = require("../services/review.service")

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

module.exports.getReviewsController = async (req, res) => {

    try {
        const review = await getReviewService()

        res.status(200).json({
            status: 'success',
            message: 'review is found successfully',
            result: review
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }

}


module.exports.deleteReviewsController = async (req, res) => {

    try {
        const { id } = req.params
        const review = await deleteReviewService(id);


        res.status(200).json({
            status: 'success',
            message: 'review is deleted successfully',
            result: review
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }

}