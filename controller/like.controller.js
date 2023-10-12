const { createLikeService, getLikeService, deleteLikeService } = require("../services/like.service");

module.exports.createLikeController = async (req, res) => {
    try {
        const bodyData = req.body;

        const result = await createLikeService(bodyData);

        res.status(200).json({
            status: 'success',
            message: 'like data posted successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}

module.exports.getLikeController = async (req, res) => {
    try {

        const result = await getLikeService();

        res.status(200).json({
            status: 'success',
            message: 'like data found successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}

module.exports.deleteLikeController = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await deleteLikeService(id);

        res.status(200).json({
            status: 'success',
            message: 'like data found successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error: error.message
        })
    }
}