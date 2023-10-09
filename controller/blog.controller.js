const { createBlogService, deleteBlogService, updateBlogService, getBlogService } = require("../services/blog.service");

module.exports.createBlogController = async (req, res) => {
    try {
        const result = await createBlogService(req.body);

        res.status(200).json({
            status: 'success',
            message: 'Blog is successfully included',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.getBlogController = async (req, res) => {
    try {
        const result = await getBlogService()

        res.status(200).json({
            status: 'success',
            message: 'Blog is successfully found',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}
module.exports.deleteBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteBlogService(id);

        res.status(200).json({
            status: 'success',
            message: 'Blog is successfully deleted',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}


module.exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateBlogService(id, req.body)

        res.status(200).json({
            status: 'success',
            message: 'Blog is successfully updated',
            result: result
        })
    } catch (error) {

        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
} 