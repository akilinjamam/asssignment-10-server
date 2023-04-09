const mongoose = require('mongoose');
const validator = require('validator');

// Schema Design

const bannerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'please provide unique name']
    },

    bannerImg: {
        type: String,
        required: true,
    },
    eventLink: {
        type: String,
        required: true,
    },
    tourType: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});


// Schema-Model-Query

const BannerEvent = mongoose.model('BannerEvent', bannerSchema);

module.exports = BannerEvent;





