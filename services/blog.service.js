const Blog = require("../models/blog")

module.exports.createBlogService = async (data) => {
    const result = await Blog.create(data);
    return result;
}

module.exports.getBlogService = async () => {
    const result = await Blog.find({})
    return result;
}


module.exports.deleteBlogService = async (id) => {
    const result = await Blog.deleteOne({ _id: id })
    return result;
}

module.exports.updateBlogService = async (id, data) => {
    const result = await Blog.updateOne({ _id: id }, { $set: data }, { runValidator: true })
    return result;
}



