const { saveBannerEventService, getBannerEventService, deleteBannerEventService, updateBannerEventService } = require("../services/bannerEvent.service")

module.exports.saveBannerEvents = async (req, res) => {
    try {
        const result = await saveBannerEventService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'banner event is successfully included',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.getBannerEvents = async (req, res) => {
    try {
        const result = await getBannerEventService()

        res.status(200).json({
            status: 'success',
            message: 'banner event is successfully found',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.deleteBannerEvents = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteBannerEventService(id);

        res.status(200).json({
            status: 'success',
            message: 'banner event is successfully deleted',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}


module.exports.updateBannerEvents = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateBannerEventService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'banner event is successfully updated',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
} 