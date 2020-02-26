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

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

app.get('/', (req, res) => {
  res.send('index.html');
});

app.get('/posts', (req, res) => {
  req.headers['Content-Type', 'application/json'];
  // res.set('Content-Type', 'application/json'); eleve jsonként küldöm, Maunika
  conn.query('SELECT * FROM posts ORDER BY post_id DESC LIMIT 10;', (err, rows) => {
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
  let owner = req.body.owner;
  let timestamp = Date.now();
  conn.query(`INSERT INTO posts (title, url, timestamp, owner) VALUES (?, ?, ?, ?)`, [title, url, timestamp, owner], (err, rows) => {
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

app.put('/posts/:id/upvote', (req, res) => {
  let post_id = req.params.id;
  res.setHeader('Content-Type', 'application/json');
  conn.query(`UPDATE posts SET score = score + 1, vote = vote + 1 WHERE post_id = ?;`, [post_id], (err, rows) => {
    if (err) {
      res.status(500).send('Database error');
    } else {
      conn.query(`SELECT * FROM posts WHERE post_id = ?;`, [post_id], (err, rows) => {
        res.status(200).send(rows);
      })
    }
  })
});

app.put('/posts/:id/downvote', (req, res) => {
  let post_id = req.params.id;
  res.setHeader('Content-Type', 'application/json');
  conn.query(`UPDATE posts SET score = score - 1, vote = vote + 1 WHERE post_id = ?;`, [post_id], (err, rows) => {
    if (err) {
      res.status(500).send('Database error');
    } else {
      conn.query(`SELECT * FROM posts WHERE post_id = ?;`, [post_id], (err, rows) => {
        res.status(200).send(rows);
      })
    }
  })
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
  // console.log(returningJSON);
  return returningJSON;
}

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));