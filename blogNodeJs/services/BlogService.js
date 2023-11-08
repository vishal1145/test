const BlogModel = require("../models/Blog");

exports.getAllBlogs = async () => {
    return await BlogModel.find().populate('comments').populate('latest.comment.id');
};

exports.createBlog = async (blog) => {
    return await BlogModel.create(blog);
};

exports.updateBlog = async (id, blog) => {
    return await BlogModel.findByIdAndUpdate(id, blog);
}

exports.deleteBlog = async (id, blog) => {
    return await BlogModel.findByIdAndDelete(id);
}