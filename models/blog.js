const mongoose = require('mongoose');


// schema design

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    blogImg: {
        type: String,
        required: true,
    },
    bloggerName: {
        type: String,
        required: true,
    },
    bloggerEmail: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false
    }

}, {
    timestamps: true,
});


const Blog = mongoose.model("Blog", blogSchema);


module.exports = Blog;
