'use strict';
const fs = require('fs');
let encoding = 'UTF-8';

function copyCat(fromFile: string, toFile: string): boolean {
  try {
    let content = fs.readFileSync(fromFile, encoding);
    fs.writeFileSync(toFile, content);
    return true;
  } catch (error) {
    return false;
  }
}

copyCat('my-fileURLToPath.txt', 'my-text.txt');

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful