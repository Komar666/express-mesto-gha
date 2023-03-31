const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: {
    type: String, min: 2, max: 30, required: true,
  },
  about: {
    type: String, min: 2, max: 30, required: true,
  },
  avatar: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);