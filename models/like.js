const mongoose = require('mongoose');


// schema design

const likeSchema = mongoose.Schema({

    likerEmail: {
        type: String,
        required: true,
    },
    blogLink: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});


const Like = mongoose.model("Like", likeSchema);


module.exports = Like;
