const mongoose = require('mongoose');
const validator = require('validator');

// Schema Design

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'please provide home event name'],
        maxLength: 40,
        unique: [true, 'please type in lowercase'],
    },
    description: { type: String, required: true },
    img: {
        type: String,
        required: true,
        validate: [validator.isURL, 'please provide valid url']
    },
    stayLong: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    tourArea: {
        type: String,
        required: true,
    },
    tourLastDate: {
        type: String,
        required: true,
    },
    tourDate: {
        type: String,
        required: true,
    },
    inclusion: {
        type: String,
        required: true,
    },
    itineraries: {
        type: String,
        required: true,
    },
    additionalInfo: {
        type: String,
        required: true,
    },
    termsAndConditions: {
        type: String,
        required: true,
    }

}, {
    timestamps: true,
});

eventSchema.methods.logger = function () {
    console.log(`Data saved for: ${this.name}`);
};

// Schema-Model-Query

const HomeEvent = mongoose.model('HomeEvent', eventSchema);

module.exports = HomeEvent