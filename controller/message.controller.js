const { saveMessageService } = require("../services/message.service")
const https = require('follow-redirects').https;
const accountSid = '1234';
const authToken = '1234';
// const client = require('twilio')(accountSid, authToken);
const twilio = require('twilio')



module.exports.createMessageController = async (req, res) => {

    try {
        const client = new twilio(accountSid, authToken)

        client.messages.create({
            body: 'hello',
            to: req.body.message,
            from: '+12092645211'
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }

}