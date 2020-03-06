const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: {
    type: String
  },
  brewery: {
    type: String
  },
  alcohol: {
    type: Number
  },
  style: {
    type: String
  },
  availability: {
    type: String
  },
  label: { type: String },
  serving: {
    type: String
  },
  id: {
    type: String
  }
});

module.exports = mongoose.model('Beer', beerSchema);
