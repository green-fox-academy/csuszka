'use strict';
const fs = require('fs');
const encoding: string = 'UTF-8';

function manipulator(fileName, str: string) {
  try {
    fs.writeFileSync(fileName, str);
  } catch (error) {
    console.log('Unable to write file: ' + fileName);
  }
}

manipulator('my-file.txt', 'Noémi Puskás');

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"