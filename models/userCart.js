const mongoose = require('mongoose');


// Schema Design:

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    emailName: {
        type: String,
        required: true,
    },
    tourName: {
        type: String,
        required: true,
    },
    tourImg: {
        type: String,
        required: true,
    },
    tourArea: {
        type: String,
        required: true,
    },
    tourType: {
        type: String,
        required: true,
    },
    tourPrice: {
        type: String,
        required: true,
    },
    totalMember: {
        type: String,
        required: true,
    },
    tourLastDate: {
        type: String,
        required: true,
    },
    tourDuration: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});


// Schema Model Query: 

const UserCart = mongoose.model('UserCart', userSchema);

module.exports = UserCart;