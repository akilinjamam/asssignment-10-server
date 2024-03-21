const mongoose = require('mongoose');

// Schema Design.

const userControllSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, 'duplicate not allowed'],
    },
    emailName: {
        type: String,
        required: true,
    },
    userRoll: {
        type: String,
        required: true,
        enum: ['normal', 'editor', 'admin'],
        default: 'normal',
        message: 'user roll can not be {VALUE}'
    },
    userPhoto: {
        type: String,
    },
    newsLetter: {
        type: String,
        required: true,
        enum: ['no', 'yes'],
        dafault: 'no',
        message: 'user newsLetter can not be {VALUE}'
    },
    phoneNumber: {
        type: String,
        default: 'Add your Phone Number'
    },
    dateOfBirth: {
        type: String,
        default: 'Add your Birth Date'
    },
    nationality: {
        type: String,
        default: 'Add your Nation ID'
    },
    gender: {
        type: String,
        default: 'Type your Gender'
    },
    address: {
        type: String,
        default: 'Type your Address'
    },
    passport: {
        type: String,
        default: 'Add your passport ID'
    }

}, {
    timestamps: true,
});



// Schema Model Query: 

const UserControll = mongoose.model('UserControll', userControllSchema);

module.exports = UserControll;

