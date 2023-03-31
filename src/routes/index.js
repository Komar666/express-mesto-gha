const express = require('express');

const usersRouter = require('./users');
const cardsRouter = require('./card');

const rootRouter = express.Router();

rootRouter.use('/users', usersRouter);
rootRouter.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).json({
    message: 'Not found',
  });
});

module.exports = rootRouter;
