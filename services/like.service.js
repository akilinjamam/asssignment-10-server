const Like = require("../models/like")

module.exports.createLikeService = async (data) => {
    return await Like.create(data)
}

module.exports.getLikeService = async () => {
    return await Like.find({})
}

module.exports.deleteLikeService = async (id) => {
    return await Like.deleteOne({ _id: id })
}