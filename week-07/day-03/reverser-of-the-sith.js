'use strict';

const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, 'The Sithlord is listening to you on port 3000');

app.post('/sith', (req, res){
  let incomingText = req.body.text;
  
})