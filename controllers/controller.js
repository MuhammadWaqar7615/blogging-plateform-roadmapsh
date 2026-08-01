const path = require('path');

const showfeed = (req, res) => {
    res.render('home', {title: 'home page'});
    // res.sendFile(path.join(__dirname, '../views', 'home.html'));
}

const postsForm = (req, res) => {
    res.render('createPosts', {title: 'Create Posts'});
}

module.exports = {
    showfeed,
    postsForm
}