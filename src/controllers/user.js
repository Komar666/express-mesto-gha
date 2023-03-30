// const mongoose = require('mongoose');
const User = require('../models/user');
const utils = require('../utils');

module.exports.getUsers = (_, res) => {
  User
    .find()
    .then((users) => res.status(200).json(users))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.createUser = (req, res) => {
  try {
    const newUser = new User(req.body);
    return newUser
      .save()
      .then(() => res.status(200).json(newUser))
      .catch((e) => utils.intoServerErrorResponse(res, e));
  } catch (e) { return utils.intoServerErrorResponse(res, e); }
};

module.exports.getUserById = (req, res) => {
  try {
    const { userId } = req.params;
    return User
      .findById({ _id: userId })
      .then((result) => res.status(200).json(result))
      .catch((e) => utils.intoServerErrorResponse(res, e));
  } catch (e) { return utils.intoServerErrorResponse(res, e); }
};

module.exports.updateUser = (req, res) => {
  try {
    const { _id } = req.body;
    return User
      .findById({ _id })
      .then((user) => {
        user
          .set(req.body).save()
          .then(() => res.status(200).json(user))
          .catch((e) => utils.intoServerErrorResponse(res, e));
      })
      .catch((e) => utils.intoServerErrorResponse(res, e));
  } catch (e) { return utils.intoServerErrorResponse(res, e); }
};

module.exports.updateUserAvatar = (req, res) => {
  try {
    const { _id, avatar } = req.body;
    return User
      .findById({ _id })
      .then((user) => {
        user
          .set({ avatar }).save()
          .then(() => res.status(200).json(user))
          .catch((e) => utils.intoServerErrorResponse(res, e));
      })
      .catch((e) => utils.intoServerErrorResponse(res, e));
  } catch (e) { return utils.intoServerErrorResponse(res, e); }
};
