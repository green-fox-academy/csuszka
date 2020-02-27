'use strict';

'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
const dotenv = require('dotenv').config(); // dotenv file should be in the same folder as the app!
const PORT = process.env.PORT;

app.use(express.json());
// app.use(express.urlencoded());
app.use(express.static('public'));

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established'); // don't close connection!
});



app.listen(PORT || 3000, () => console.log('The app is listening'));