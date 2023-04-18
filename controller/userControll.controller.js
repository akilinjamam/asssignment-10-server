const { saveUserControllService, getUserControllService, updateUserControllByIdService } = require("../services/userControll.Service")


module.exports.saveUserControll = async (req, res) => {
    try {
        const result = await saveUserControllService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'successfully user posted',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user is failed to post',
            error: error.message
        })
    }


}

module.exports.getUserControll = async (req, res) => {
    try {
        const result = await getUserControllService()

        res.status(200).json({
            status: 'success',
            message: 'successfully found user ',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user is failed to find',
            error: error.message
        })
    }


}

module.exports.updateUserControll = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateUserControllByIdService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'successfully updated user ',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user is failed to update',
            error: error.message
        })
    }


}