'use strict';

const express = require('express');
const app = express();
const path = require('path'); // problems stemming from windows and linux path diffrences will not exist anymore
const bodyParser = require('body-parser');

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html')); // path ^
})

app.get('/doubling', (req, res) => {
  let responseObject = {
  };
  if (req.query.input === undefined) {
    responseObject = {
      "error": "Please provide an input!"
    };
  } else {
    responseObject = {
      "received": Number(req.query.input),
      "result": Number(req.query.input) * 2
    }
  }
  res.send(responseObject);
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let statusCode;
  let responseObject = {
  };
  if (!name && !title) {
    responseObject = {
      "error": "Please provide a name and a title!"
    };
    statusCode = 400;
  } else if (!name) {
    responseObject = {
      "error": "Please provide a name!"
    }
    statusCode = 400;
  } else if (!title) {
    responseObject = {
      "error": "Please provide a title!"
    }
    statusCode = 400;
  } else {
    responseObject = {
      "welcome_message": "Oh, hi there " + name + ", my dear " + title + "!"
    }
    statusCode = 200;
  }
  res.status(statusCode).send(responseObject);
});

app.get('/appenda/:appendable', (req, res) => {
  let appended = req.params.appendable + "a";
  let responseObject = {
    "appended": appended
  };
  res.send(responseObject);
});

app.post('/dountil/:action', (req, res) => {
  let number = req.body.until;
  let action = req.params.action;
  let result;
  let responseObject = {};

  if (!number) {
    responseObject = {
      "error": "Please provide a number!"
    };
  } else {
    if (action === 'sum') {
      let sum = 0;
      for (let i = 1; i <= number; i++) {
        sum += i;
      }
      result = sum;
    } else if (action === 'factor') {
      let fac = 1;
      for (let i = 1; i <= number; i++) {
        fac *= i;
      }
      result = fac;
    }
    responseObject = {
      "result": result
    }
  }
  res.send(responseObject);
});

app.listen(3000, function () {
  console.log('The app is listening on port 3000');
});