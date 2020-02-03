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
  console.log('Connection established'); //don't close the connection
});

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/posts', (req, res) => {
  res.set('Content-Type', 'application/json');
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      res.send(creatingJSON(rows));
    }
  });
});

app.post('/posts', (req, res) => {
  let title = req.body.title;
  let url = req.body.url;
  conn.query(`INSERT INTO posts (title, url) VALUES (?, ?)`, [title, url], (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      conn.query(`SELECT * FROM posts ORDER BY post_id DESC LIMIT 0, 1`, (err, rows) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(creatingJSON(rows));
        }
      });
    }
  });
});

function creatingJSON(rows) {
  let returningJSON = { posts: [] };
  rows.forEach(element => {
    let objectToPush = {};
    for (let i in element) {
      objectToPush[i] = element[i];
    }
    returningJSON.posts.push(objectToPush)
  });
  console.log(returningJSON);
  return returningJSON;
}

app.listen(PORT, () => `App listening on ${PORT}`);