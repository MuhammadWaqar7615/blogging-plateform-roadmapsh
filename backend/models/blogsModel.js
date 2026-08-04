const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    username: String,
    post: String
});

module.exports = mongoose.model('blogs', blogsSchema);
