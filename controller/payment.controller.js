const { v4: uuidv4 } = require("uuid");
const { savePaymentService, getPaymentService } = require("../services/payment.service");
const SSLCommerzPayment = require("sslcommerz-lts");
const Payment = require("../models/payment");

module.exports.savePaymentController = async (req, res) => {
    const store_id = process.env.STORE_ID
    const store_passwd = process.env.STORE_PASSWORD
    const is_live = false;

    try {
        const bodyData = req.body;

        const generateUniqueId = uuidv4();

        if (!bodyData.tran_id) {
            bodyData.tran_id = generateUniqueId;
        }

        if (
            !bodyData.total_amount || !bodyData.currency || !bodyData.cus_name || !bodyData.cus_email || !bodyData.cus_add1 || !bodyData.cus_city || !bodyData.cus_postcode || !bodyData.cus_country || !bodyData.cus_phone || !bodyData.tourName || !bodyData.fatherName || !bodyData.motherName || !bodyData.nidNum || !bodyData.genderId || !bodyData.tourType || !bodyData.tourDuration || !bodyData.paymentMethod || !bodyData.member || !bodyData.tourDate || !bodyData.tourId || !bodyData.orderDate || !bodyData.orderNumber
        ) {
            return res.status(400).json({
                status: 'failed',
                message: 'please provide all informations.....'
            })
        } else {
            console.log('all data found successfully..')
        }

        console.log(bodyData);

        await savePaymentService(bodyData);

        const data = {
            total_amount: bodyData.total_amount,
            currency: "BDT",
            tran_id: generateUniqueId,
            success_url: `${process.env.SERVER_SIDE_LINK}/api/v1/payment/success?transectionId=${generateUniqueId}`,
            fail_url: `${process.env.SERVER_SIDE_LINK}/api/v1/payment/fail?transectionId=${generateUniqueId}`,
            cancel_url: "http://localhost:5000/api/v1/payment/cancel",
            ipn_url: "http://localhost:3030/ipn",
            shipping_method: "Courier",
            product_name: "Computer.",
            product_category: "Electronic",
            product_profile: "general",
            cus_name: bodyData.cus_name,
            cus_email: bodyData.cus_email,
            cus_add1: bodyData.cus_add1,
            cus_add2: "Dhaka",
            cus_city: bodyData.cus_city,
            cus_state: "Dhaka",
            cus_postcode: bodyData.cus_postcode,
            cus_country: bodyData.cus_country,
            cus_phone: bodyData.cus_phone,
            cus_fax: "01711111111",
            ship_name: "Customer Name",
            ship_add1: "Dhaka",
            ship_add2: "Dhaka",
            ship_city: "Dhaka",
            ship_state: "Dhaka",
            ship_postcode: 1000,
            ship_country: "Bangladesh",
        };



        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then((apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL;
            res.send({ url: GatewayPageURL });
            // console.log("Redirecting to: ", GatewayPageURL);
        });


    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}


module.exports.successPaymentController = async (req, res) => {
    try {
        console.log(req.body)
        const { transectionId } = req.query;
        const result = await Payment.updateOne(
            { tran_id: transectionId },
            { isPaid: true },
            { runValidators: true }
        );

        if (result.modifiedCount > 0) {

            res.redirect(
                `${process.env.CLIENT_SIDE_LINK}/payment/success?transectionId=${transectionId}`
            );
        }

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}


module.exports.failedPaymentController = async (req, res) => {
    try {
        const { transectionId } = req.query;

        const result = await Payment.deleteOne({ tran_id: transectionId });

        if (result.deletedCount) {
            res.redirect(`${process.env.CLIENT_SIDE_LINK}/payment/fail`);
        }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: error.message
        })
    }
}

module.exports.getPaymentController = async (req, res) => {
    try {

        const result = await getPaymentService();

        res.status(200).json({
            status: 'success',
            message: 'payment info found successfully',
            result: result
        })

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'failed to get payment info',
            error: error.message
        })
    }
}