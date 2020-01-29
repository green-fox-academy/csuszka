'use strict';

const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.post('/arrays', (req, res) => {
  let operation = req.body.what;
  let incomingArray = req.body.numbers;
  console.log(incomingArray);
  let responseObject = {
  };

  if (!operation) {
    responseObject = {
      "error": "Please provide what to do with the numbers!"
    };
  } else if (operation === 'sum') {
    let sum = 0;
    for (let i = 0; i < incomingArray.length; i++) {
      sum += incomingArray[i];
    }
    responseObject = {
      "result": sum
    }
  } else if (operation === 'multiply') {
    let multiply = 1;
    for (let i = 0; i < incomingArray.length; i++) {
      multiply *= incomingArray[i];
    }
    responseObject = {
      "result": multiply
    }
  } else if (operation === 'double') {
    let double = incomingArray.map((e) => e * 2);
    responseObject = {
      "result": double
    }
  }
  res.send(responseObject);
})

app.listen(3000, () => { console.log('Watashi ga kiite iru =(^__^)=') });