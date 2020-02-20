'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let answer;
  if (req.query.message) {
    answer = JSON.stringify({
      "received": req.query.message,
      "translated": "I am Groot!"
    });
  } else {
    answer = JSON.stringify({
      "error": "I am Groot!"
    });
  }
  res.send(answer);
});

module.exports = app;