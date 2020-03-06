const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const beerRoute = require('./routes/beer');

const PORT = process.env.PORT || 4000;
const MONGO_URI =
  process.env.MONGODB_ADDON_URI ||
  'mongodb://utxziahqphnjh31zk3ox:pz6ptqVW17xyg83KoPAk@brbpyo1rwy8ituh-mongodb.services.clever-cloud.com:27017/brbpyo1rwy8ituh';

app.use(bodyParser.json());
app.use(cors());

app.use('/beers', beerRoute);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data
  });
});

mongoose
  .connect(MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(result => {
    app.listen(PORT);
    console.log(' Connected');
  })
  .catch(error => {
    console.log(error);
  });

module.exports = app;
