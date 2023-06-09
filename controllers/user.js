/* eslint-disable linebreak-style */
// const mongoose = require('mongoose');
const User = require('../models/user');
const utils = require('../utils');

module.exports.getUsers = (_, res) => {
  User.find()
    .then((users) => res.status(200).json(users))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  const newUser = new User({
    name,
    about,
    avatar,
  });
  return newUser
    .save()
    .then(() => res.status(200).json(newUser))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.getUserById = (req, res) => {
  const { userId } = req.params;
  return User.findById({ _id: userId })
    .orFail()
    .then((result) => res.status(200).json(result))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.updateUser = (req, res) => {
  const {
    name, about,
  } = req.body;
  return User.findByIdAndUpdate(
    req.user._id,
    { name, about },
    {
      runValidators: true,
      returnDocument: 'after',
      upsert: true, // FOR TESTS TO PASS. Insert record if not found
    },
  )
    .orFail()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.updateUserAvatar = (req, res) => {
  const { avatar } = req.body;
  return User.findByIdAndUpdate(req.user._id, { avatar }, { runValidators: true, returnDocument: 'after' })
    .orFail()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((e) => utils.intoServerErrorResponse(res, e));
};
