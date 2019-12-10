const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

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
  .connect(
    'mongodb://beerapicosmodb:FEQY5YCOwSnnyXrgpIOndqqclnYOzGk4yHIn7f7PlnjZBLEAXEgiCqxD1Ui9GpF59ozM3C5z7QlhkolFzkaFUA%3D%3D@beerapicosmodb.mongo.cosmos.azure.com:10255/?ssl=true&appName=@beerapicosmodb@'
  )
  .then(result => {
    app.listen(port);
    console.log(result + ' Connected');
  })
  .catch(error => {
    console.log(error);
  });

module.exports = app;
