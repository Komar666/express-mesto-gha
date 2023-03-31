/* eslint-disable linebreak-style */
const Card = require('../models/card');
const utils = require('../utils');

module.exports.getCards = (_, res) => {
  Card.find()
    .then((users) => res.status(200).json(users))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.createCard = (req, res) => {
  const {
    name, link,
  } = req.body;

  const newCard = new Card({
    name,
    link,
    owner: req.user._id,

  });
  return newCard
    .save()
    .then(() => res.status(200).json(newCard))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.deleteCardById = (req, res) => {
  const { cardId } = req.params;
  return Card.findByIdAndRemove({ _id: cardId })
    .orFail()
    .then(() => res.status(200).json({ message: 'OK' }))
    .catch((e) => utils.intoServerErrorResponse(res, e));
};

module.exports.addCardLike = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .orFail()
  .then((result) => res.status(200).json(result))
  .catch((e) => utils.intoServerErrorResponse(res, e));

module.exports.removeCardLike = (req, res) => Card.findByIdAndUpdate(
  req.params.cardId,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .orFail()
  .then((result) => res.status(200).json(result))
  .catch((e) => utils.intoServerErrorResponse(res, e));
