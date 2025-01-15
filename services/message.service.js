// const Message = require("../models/message");
// const https = require('follow-redirects').https

// module.exports.saveMessageService = async (res, data) => {
//     // const result = await Message.create(data);
//     // return result;

//     let responseSent = false; // Flag to track if the response has been sent

//     const postData = JSON.stringify({
//         "messages": [
//             {
//                 "destinations": [{ "to": data.message }],
//                 "from": "ServiceSMS",
//                 "text": "Congratulations on sending your first message.\nGo ahead and check the delivery report in the next step."
//             }
//         ]
//     });

//     const options = {
//         'method': 'POST',
//         'hostname': '9l91gr.api.infobip.com',
//         'path': '/sms/2/text/advanced',
//         'headers': {
//             'Authorization': 'App b9ba401505a1941ecb355dcfec7fbe70-8b6299bd-faf0-4001-a62e-0c4260c29f5e',
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         'maxRedirects': 20
//     };

//     const reqToInfobip = https.request(options, function (responseFromInfobip) {
//         let chunks = [];

//         responseFromInfobip.on("data", function (chunk) {
//             chunks.push(chunk);
//         });

//         responseFromInfobip.on("end", function () {
//             if (!responseSent) {
//                 const body = Buffer.concat(chunks);
//                 console.log(body.toString());
//                 res.send(body.toString()); // Sending response back to the client
//                 responseSent = true;
//             }
//         });
//     });

//     reqToInfobip.on("error", function (error) {
//         if (!responseSent) {
//             console.error(error);
//             res.status(500).send('Internal Server Error'); // Sending error response back to the client
//             responseSent = true;
//         }
//     });

//     reqToInfobip.write(postData);
//     reqToInfobip.end();

// }
