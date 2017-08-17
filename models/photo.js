const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const schema = new mongoose.Schema({
  name: String,
  desc: String,
  path: String,
});

module.exports = mongoose.model('photo', schema);