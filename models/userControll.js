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
    }
}, {
    timestamps: true,
});



// Schema Model Query: 

const UserControll = mongoose.model('UserControll', userControllSchema);

module.exports = UserControll;

