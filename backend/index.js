const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/routes');
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

const URI = process.env.MONGODB_URI;
try {
    mongoose.connect(URI);
    console.log("MongoDB Connected Successfully");
} catch (error) {
    console.error(error)
}

app.use(express.json());
app.use(cors());
app.use('/', routes);
app.listen(PORT, (req, res) => {
    console.log('server is listening at port: ', PORT);
})