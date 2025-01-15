const { saveMessageService } = require("../services/message.service")
const https = require('follow-redirects').https;
const accountSid = 'ACe19404839e9be1d715c221d5fef1b5d4';
const authToken = 'c2ea34ffc05c50139dd99f455a00be0b';
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