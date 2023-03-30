const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  about: { type: String, required: true },
  avatar: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
