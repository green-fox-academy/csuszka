'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const mysql = require('mysql');
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.use(express.static('public'));
app.set('viewengine', 'ejs');

function filter(req) {
  if (!req.query) {
    return '';
  } else {
    let selection = `WHERE `;
    if (req.query.category) {
      selection += `cate_descrip = "${req.query.category}"`;
    }
    if (req.query.publisher) {
      if (selection.length > 6) {
        selection += ` AND  `;
      }
      selection += `pub_name = "${req.query.publisher}"`;
    }
    if (req.query.plt) {
      if (selection.length > 6) {
        selection += ` AND `
      }
      selection += `book_price < ${req.query.plt} `;
    }
    if (req.query.pgt) {
      if (selection.length > 6) {
        selection += ` AND `
      }
      selection += `book_price > ${req.query.pgt} `;
    }
    return selection;
  }
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/books', (req, res) => {
  let databaseFilter = filter(req);
  let tables = `author JOIN book_mast ON author.aut_id = book_mast.aut_id JOIN category ON book_mast.cate_id = category.cate_id JOIN newpublisher ON book_mast.pub_id = newpublisher.pub_id`;
  let databaseQuery = `SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM ${tables} ${databaseFilter};`;

  conn.connect((err) => {
    if (err) {
      console.error('Cannot connect to the database', err);
      return;
    }
    console.log('Connection established');
  });


  conn.query(databaseQuery, (err, rows) => {
    res.render('booklists.ejs', {
      rows: rows
    })
  })
});



app.listen(PORT, () => {
  console.log(`Bookstore app listening on port ${PORT} `)
})