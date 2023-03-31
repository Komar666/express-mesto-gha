const mongoose = require("mongoose");

const T = mongoose.Types;

const cardSchema = new mongoose.Schema({
    name: { type: String, min: 2, max: 30, required: true },
    link: { type: String, required: true },
    owner: { type: T.ObjectId, required: true },
    likes: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Card", cardSchema);