const express = require('express');

const cardsRouter = express.Router();

const controller = require('../controllers/card');

// GET /cards
cardsRouter.get('/', controller.getCards);
// POST /cards
cardsRouter.post('/', controller.createCard);
// DELETE /cards/:cardId
cardsRouter.delete('/:cardId', controller.deleteCardById);
// PUT /cards/:cardId/likes
cardsRouter.put('/:cardId/likes', controller.addCardLike);
// DELETE /cards/:cardId/likes
cardsRouter.delete('/:cardId/likes', controller.removeCardLike);

module.exports = cardsRouter;
