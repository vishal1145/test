const express = require("express");

const {
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
} = require("../controllers/BlogController");

const router = express.Router();

// router.route("/").get(getAllBlogs).post(createBlog);

router.get('/allBlogs', getAllBlogs);
router.post('/createBlog', createBlog);
router.put('/updateBlog/:id', updateBlog);
router.delete('/deleteBlog/:id', deleteBlog)

module.exports = router;