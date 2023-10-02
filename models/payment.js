const mongoose = require('mongoose');

// Schema Design
const paymentSchema = mongoose.Schema(
    {
        total_amount: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
        },
        tran_id: {
            type: String,
            required: true,
        },
        success_url: {
            type: String,
        },
        fail_url: {
            type: String,
        },
        cancel_url: {
            type: String,
        },
        ipn_url: {
            type: String,
        },
        shipping_method: {
            type: String,
        },
        product_name: {
            type: String,
        },
        product_category: {
            type: String,
        },
        product_profile: {
            type: String,
        },
        cus_name: {
            type: String,
            required: true,
        },
        cus_email: {
            type: String,
            required: true,
        },
        cus_add1: {
            type: String,
            required: true,
        },
        cus_add2: {
            type: String,
        },
        cus_city: {
            type: String,
            required: true,
        },
        cus_postcode: {
            type: String,
            required: true,
        },
        cus_state: {
            type: String,
        },
        cus_country: {
            type: String,
            required: true,
        },
        cus_phone: {
            type: String,
            required: true,
        },
        cus_fax: {
            type: String,
        },
        ship_name: {
            type: String,
        },
        ship_add1: {
            type: String,
        },
        ship_add2: {
            type: String,
        },
        ship_city: {
            type: String,
        },
        ship_state: {
            type: String,
        },
        ship_postcode: {
            type: Number,
        },
        ship_country: {
            type: String,
        },
        isPaid: {
            type: Boolean,
            default: false,
            required: true,
        },
        tourName: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
);


// creating model:

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

