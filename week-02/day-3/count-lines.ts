'use strict';
const fs = require('fs');
const encoding: string = 'UTF-8';

function counter(fileName: string) {
  try {
    let fileContent: string = fs.readFileSync(fileName, encoding);
    let lineCounter: number = 1;
    
    for (let i = 0; i < fileContent.length; i++) {
      if (fileContent[i] === '\n') {
        lineCounter++;
      }
    }
    console.log(lineCounter);

  } catch (error) {
    console.log(0);
  }
}



counter('mytest.txt');

// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.