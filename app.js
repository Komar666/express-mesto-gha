/* eslint-disable linebreak-style */
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();

const DB_CON_STRING = 'mongodb://127.0.0.1:27017';

const rootRouter = require('./routes');

app.use(bodyParser.json());

app.use((req, res, next) => {
  req.user = {
    _id: '64239247b9d98c0a410a39ec',
  };
  next();
});

app.use('/', rootRouter);

// set up mongoose
mongoose
  .connect(DB_CON_STRING, {
    dbName: 'mestodb',
  })
  .then(() => {
    console.log('Connected to db!');
  })
  .catch(() => {
    console.log('Error while connecting to db');
  });

app.listen(PORT, () => {
  console.log(`Express up & listen on ${PORT} port`);
});
