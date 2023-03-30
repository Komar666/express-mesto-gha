const express = require('express');

const usersRouter = express.Router();

const controller = require('../controllers/user');

// GET /users
usersRouter.get('/', controller.getUsers);
// POST /users
usersRouter.post('/', controller.createUser);
// GET /users/:userId
usersRouter.get('/:userId', controller.getUserById);
// PATCH /users/me
usersRouter.patch('/me', controller.updateUser);
// PATCH /users/me/avatar
usersRouter.patch('/me/avatar', controller.updateUserAvatar);

module.exports = usersRouter;
