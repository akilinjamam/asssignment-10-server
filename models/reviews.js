const mongoose = require('mongoose');

// Schema Design

const reviewSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100
    }
}, {
    timestamps: true,
});


// creating model:

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

