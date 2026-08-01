const express = require('express');
const router = express.Router();
const { showfeed, postsForm } = require('../controllers/controller');

router.get('/create-post', postsForm)
router.get('/', showfeed)

module.exports = router;