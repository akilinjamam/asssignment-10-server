const nodemailer = require("nodemailer");


module.exports.postMailService = async (data) => {


    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD
        },
    });


    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_USERNAME,
            to: data.to,
            subject: data.sub,
            html: "<b>Hello world. this is test message</b>",
        });

        const result = `Message sent: %s :  ${info.accepted}`;
        return result;

    } catch (error) {
        return error.message
    }

}

