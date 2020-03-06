const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  brewery: {
    type: String,
    require: true
  },
  alcohol: {
    type: Number,
    require: true
  },
  style: {
    type: String,
    require: true
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

