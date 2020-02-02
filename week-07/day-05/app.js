'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
  conn.end();
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/posts', (req, res) => {
  
})

app.listen(PORT, () => `App listening on ${PORT}`);