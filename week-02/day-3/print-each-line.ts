'use strict';
const fs = require('fs');

function printer(fileName: string): any {
  try {
    let contents: string = fs.readFileSync(fileName, 'UTF-8');
    console.log(contents);
  } catch (error){
    console.log('Unable to read file: ' + fileName);
  }
}

printer('my-file.txt');
// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"