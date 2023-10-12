const { createCommentService, getCommentService, deleteCommentService } = require("../services/comment.service");
const { createLikeService, getLikeService, deleteLikeService } = require("../services/like.service");

module.exports.createCommentController = async (req, res) => {
    try {
        const bodyData = req.body;
        const result = await createCommentService(bodyData);

        res.status(200).json({
            status: 'success',
            message: 'comment data posted successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }

}
module.exports.getCommentController = async (req, res) => {
    try {
        const result = await getCommentService()

        res.status(200).json({
            status: 'success',
            message: 'comment data found successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}
module.exports.deleteCommentController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteCommentService(id);

        res.status(200).json({
            status: 'success',
            message: 'comment data deleted successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}