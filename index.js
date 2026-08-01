const { MongoClient } = require('mongodb');
require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = 3000;

app.set('view engine', 'ejs');


const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
async function run(params) {
    try {
        await client.connect();
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("error while connecting with mongodb: ", error);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

app.use(express.json());
app.use('/', routes);
app.listen(PORT, (req, res) => {
    console.log('server is listening at port: ', PORT);
})