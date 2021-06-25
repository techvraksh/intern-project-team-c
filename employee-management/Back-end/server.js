const express = require('express');
const mongoose = require('mongoose');

const dontenv = require('dotenv');
dontenv.config();

const app = express();

app.use(express.json());

const db = process.env.MONGODB_URI;
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('<=====DATABASE CONNECTED=====>');
    })
    .catch((err) => {
        console.log(err, 'Error reaching the DB');
    });

app.listen(4400, () => {
    console.log('server is up and running');
});
