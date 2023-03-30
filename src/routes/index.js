const express = require('express');

const usersRouter = require('./users');
const cardsRouter = require('./card');

const rootRouter = express.Router();

rootRouter.use('/users', usersRouter);
rootRouter.use('/cards', cardsRouter);

module.exports = rootRouter;
