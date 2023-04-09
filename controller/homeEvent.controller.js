const { saveHomeEventService, getHomeEventService, getHomeEventByIdService, deleteHomeEventByIdService, updateHomeEventByIdService } = require("../services/homeEvent.service")


module.exports.saveHomeEvent = async (req, res) => {
    try {
        const result = await saveHomeEventService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'home event successfully added to database',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}


module.exports.getHomeEvent = async (req, res) => {
    try {
        const result = await getHomeEventService();

        res.status(200).json({
            status: 'success',
            message: 'home events found successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'unfortunately home event not found here',
            error: error.message
        })
    }
}

module.exports.getHomeEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getHomeEventByIdService(id);

        res.status(200).json({
            status: 'success',
            message: 'home events found by id successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'unfortunately home event by id not found here',
            error: error.message
        })
    }
}
module.exports.deleteHomeEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteHomeEventByIdService(id)

        res.status(200).json({
            status: 'success',
            message: 'event is deleted by successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'unfortunately event by id is not deleted',
            error: error.message
        })
    }
};

module.exports.updateHomeEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateHomeEventByIdService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'event is updated successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'unfortunately event by id is not updated',
            error: error.message
        })
    }
}

module.exports.fileUpload = async (req, res) => {
    try {
        res.status(200).json(req.file);
    } catch (error) {
        res.status(400).json({ status: 'failed', message: error.message })
    }
}