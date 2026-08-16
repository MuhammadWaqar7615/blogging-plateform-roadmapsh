const express = require('express');
const router = express.Router();
const { getBlogs, blogForm, createBlog, deleteBlog } = require('../controllers/blogsController');

router.get('/blogs', getBlogs);
router.get('/create-post', blogForm);
router.post('/', createBlog);
router.delete('/', deleteBlog);

module.exports = router;