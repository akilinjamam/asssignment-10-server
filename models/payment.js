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
        },
        fatherName: {
            type: String,
            required: true
        },
        motherName: {
            type: String,
            required: true
        },
        nidNum: {
            type: String,
            required: true
        },
        genderId: {
            type: String,
            required: true
        },
        tourType: {
            type: String,
            required: true
        },
        tourDuration: {
            type: String,
            required: true
        },
        paymentMethod: {
            type: String,
            required: true
        },
        member: {
            type: String,
            required: true
        },
        tourDate: {
            type: String,
            required: true
        },
        tourId: {
            type: String,
            required: true
        },
        orderDate: {
            type: String,
            required: true
        },
        nameData: [
            {
                member1: {
                    type: String
                },
                member2: {
                    type: String
                },
                member3: {
                    type: String
                },
                member4: {
                    type: String
                },
                member5: {
                    type: String
                },
                member6: {
                    type: String
                },
                member7: {
                    type: String
                },
                member8: {
                    type: String
                },
                member9: {
                    type: String
                },
                member10: {
                    type: String
                },
                member11: {
                    type: String
                },
                member12: {
                    type: String
                },
                member13: {
                    type: String
                },
                member14: {
                    type: String
                },
                member15: {
                    type: String
                },
            }
        ]

    },
    {
        timestamps: true,
    }
);


// creating model:

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;

