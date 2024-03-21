
const { postMailService } = require("../services/sendmail.service");

module.exports.postMail = async (req, res) => {

    try {
        const mailResponse = await postMailService(req.body);
        console.log("from-controller", mailResponse)
        res.status(200).json({
            status: 'success',
            message: 'mail data found successfully',
            result: mailResponse
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }

}

