'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));
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
  console.log('Connection established'); //don't close the connection!
});

app.get('/', (req, res) => {
  res.send('index.html');
});



app.listen(PORT, () => console.log(`App listening on port ${PORT}`));