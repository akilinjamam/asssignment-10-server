const { param } = require("express-validator");
const { saveUserCartService, getUserCartByEmailService, updateUserCartByIdService, getUserCartDataService, deleteUserCartByBulkService, updateUserByOnlyIdService, getUserCartByIdService, deleteUserByOnlyIdService, deleteUserCartByOnlyIdService } = require("../services/userCart.service")

module.exports.saveUserCart = async (req, res) => {

    try {
        const result = await saveUserCartService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'users added successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user is not added yet...',
            error: error.message,
        })
    }

};

module.exports.getUserCart = async (req, res) => {

    try {
        const result = await getUserCartDataService()
        res.status(200).json({
            status: 'success',
            message: 'users found successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user is not added yet...',
            error: error.message,
        })
    }

};


module.exports.getuserCartByEmail = async (req, res) => {

    try {
        const email = req.query.email;
        const query = { email: email };
        const result = await getUserCartByEmailService(query);
        res.status(200).json({
            status: 'success',
            message: 'users email found successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user  email is not found yet...',
            error: error.message,
        })
    }

}
module.exports.getuserCartById = async (req, res) => {

    try {

        const { id } = req.params;
        const result = await getUserCartByIdService(id);
        res.status(200).json({
            status: 'success',
            message: 'users email found by id successfully',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user  email is not found by id yet...',
            error: error.message,
        })
    }

}
module.exports.updateUserCartById = async (req, res) => {

    try {
        const result = await updateUserCartByIdService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'users email is successfully updated',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user  email is failed to update',
            error: error.message,
        })
    }

}

module.exports.deleteUserCartByBulk = async (req, res) => {

    try {
        const result = await deleteUserCartByBulkService(req.body.ids);
        res.status(200).json({
            status: 'success',
            message: 'users is successfully deleted',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user  email is failed to delete',
            error: error.message,
        })
    }

}

module.exports.updateUserCartByOnlyId = async (req, res) => {

    try {
        const { id } = req.params;
        const result = await updateUserByOnlyIdService(id, req.body);
        res.status(200).json({
            status: 'success',
            message: 'users is successfully updated by id',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user  email is failed to update by id',
            error: error.message,
        })
    }

}

module.exports.deleteUserCartByOnlyId = async (req, res) => {

    try {
        const { id } = req.params;
        const result = await deleteUserCartByOnlyIdService(id);
        res.status(200).json({
            status: 'success',
            message: 'users is successfully deleted by id',
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'user  email is failed to deleted by id',
            error: error.message,
        })
    }

}