const blogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogService.getAllBlogs();
        res.json({data: blogs, status: "Success"});
    } catch (err) {
        res.status(500).json({error: err.message });
    }
};

exports.createBlog = async (req, res) => {
    try {
        const blog = await blogService.createBlog(req.body);
        res.json({data: blog, status: "Success"});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

exports.updateBlog = async (req, res) => {

    console.log(req.params); // i.e url -> http://localhost:3001/api/blogs/updateBlog/123
    console.log(req.body); // json data body -> { "id": "ABC" }
    console.log(req.query); // from querystring -> ?id=xyz

    try {
        const blog = await blogService.updateBlog(req.params.id, req.body);
        res.json({data: blog, status: "Update Success"});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
}

exports.deleteBlog = async (req, res) => {

    try {
        const blog = await blogService.deleteBlog(req.params.id, req.body);
        res.json({data: blog, status: "Delete Success"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }

}