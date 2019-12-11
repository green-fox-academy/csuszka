'use strict';
const fs = require('fs');

function multiManipulator(filePath: string, word: string, num: number) {
  try {
    let content: string = '';
    for (let i: number = 0; i < num; i++) {
      content = content + word + '\n';
    }
    fs.writeFileSync(filePath, content);
  } catch (error) {
  }
}


multiManipulator('my-text.txt', 'apple', 5);

// Create a function that takes 3 parameters: a path, a word and a number
// and is able to write into a file.
// The path parameter should be a string that describes the location of the file you wish to modify
// The word parameter should also be a string that will be written to the file as individual lines
// The number parameter should describe how many lines the file should have.
// If the word is 'apple' and the number is 5, it should write 5 lines
// into the file and each line should read 'apple'
// The function should not raise any errors if it could not write the file.