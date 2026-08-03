const express = require('express');
const router = express.Router();
const { getBlogs, blogForm, createBlog } = require('../controllers/blogsController');

router.get('/', getBlogs)
router.get('/create-post', blogForm)
router.post('/', createBlog);

module.exports = router;