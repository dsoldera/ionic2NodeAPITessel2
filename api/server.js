'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
var five = require('johnny-five');
var tessel = require('tessel-io');

var board = new five.Board({
  io: new tessel()
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/api/contacts', (request, response) => {

});

app.get('/api/contacts/:id', (request, response) => {

});

const hostname = 'localhost';
const port = 3001;

const server = app.listen(port, hostname, () => {

  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`To stop running CTRL + C`);
});