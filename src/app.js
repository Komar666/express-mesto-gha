const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// const DB_CON_STRING = 'mongodb://admin:4928zSGMJJLJDGETdfNJ87cH675H8rfHMLJx334jYFKJJw8Qieg@178.219.167.51:27017/admin';
const DB_CON_STRING = 'mongodb://127.0.0.1';

const port = 5000;

const rootRouter = require('./routes');

app.use(bodyParser.json());

app.use((req, res, next) => {
    req.user = {
        _id: '6425958c4481eed457ea97b4',
    };
    next();
});

app.use('/', rootRouter);

app.get('/status', (req, res) => {
    res.status(200).json({
        message: 'Server is running',
    });
});

// set up mongoose
mongoose.connect(DB_CON_STRING, {
        dbName: 'mestodb',
    })
    .then(() => {
        console.log('Connected to db!');
    })
    .catch(() => {
        console.log('Error while connecting to db');
    });

app.listen(port, () => {
    console.log(`Express up & listen on ${port} port`);
});