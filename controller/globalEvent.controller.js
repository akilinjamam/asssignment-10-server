const { saveGlobalEventService, getGlobalEventService, getGlobalEventByIdService, deleteGlobalEventByIdService, updateGlobalEventByIdService } = require("../services/globalEvent.service")


module.exports.saveGlobalEvent = async (req, res) => {
    try {
        const result = await saveGlobalEventService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'global event successfully added to Database',
            result: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}

module.exports.getGlobalEvent = async (req, res) => {
    try {
        const result = await getGlobalEventService();

        res.status(200).json({
            status: 'success',
            message: 'global events found successfully',
            result: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.getGlobalEventbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getGlobalEventByIdService(id);

        res.status(200).json({
            status: 'success',
            message: 'global events found by id successfully',
            result: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.deleteGlobalEventbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteGlobalEventByIdService(id);

        res.status(200).json({
            status: 'success',
            message: 'event is deleted by id successfully',
            result: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.updateGlobalEventbyId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateGlobalEventByIdService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'event is udpated by id successfully',
            result: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}