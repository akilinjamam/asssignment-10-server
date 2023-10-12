const mongoose = require('mongoose');

//schema design

const commentSchema = mongoose.Schema({

    commenterEmail: {
        type: String,
        required: true,
    },
    blogLink: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    }

}, {
    timestamps: true,
});


const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
