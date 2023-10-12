const Comment = require("../models/comment")


module.exports.createCommentService = async (data) => {
    return await Comment.create(data);
}

module.exports.getCommentService = async () => {
    return await Comment.find({});
}

module.exports.deleteCommentService = async (id) => {
    return await Comment.deleteOne({ _id: id })
}