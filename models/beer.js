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
  }
});

module.exports = mongoose.model('Beer', beerSchema);

alcohol: 6.8
availability: "Year round"
brewery: "Brasserie Affligem (Heineken)"
description: "Affligem Blonde, the classic clear blonde abbey ale, with a gentle roundness and 6.8% alcohol. Low on bitterness, it is eminently drinkable."
id: "AffligemBlond"
img: "beers/img/AffligemBlond.jpg"
label: "beers/img/AffligemBlond-label.png"
name: "Affligem Blond"
serving: "Serve in a Snifter"
style: "Belgian-Style Blonde Ale"