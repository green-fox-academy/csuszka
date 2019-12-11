'use strict';

import { stringify } from "querystring";

const fs = require('fs');
const encoding = 'UTF-8';

function decrypter(fileName: string) {
  let contentFromSource = fs.readFileSync(fileName, encoding);
  // calculating the number of lines:
  let numberOfLines = 1;
  for (let x: number = 0; x < contentFromSource.length; x++) {
    if (contentFromSource[x] === '\n') {
      numberOfLines++;
    }
  }
  //creating array items from the file's lines:
  let arrayOfLines: string[] = [];
  let lineCharacters: string = '';
  for (let i: number = 0; i < contentFromSource.length; i++) {
    if (contentFromSource[i] === '\r') {
    }
    else if (contentFromSource[i] === '\n') {
      arrayOfLines.push(lineCharacters);
      lineCharacters = '';
    } else {
      lineCharacters = lineCharacters + contentFromSource[i];
    }
  }
  //decrypting the items in the array:
  let decryptedContent: string = '';
  for (let j: number = 0; j < arrayOfLines.length; j++) {
    let decryptedLine: string = '';
    for (let k: number = 0; k < arrayOfLines[j].length; k = k + 2) {
      decryptedLine = decryptedLine + arrayOfLines[j][k];
    }
    decryptedContent = decryptedContent + decryptedLine + '\r\n';
  }
  console.log(decryptedContent);
}

decrypter('duplicated-chars.txt');




// Create a method that decrypts duplicated-chars.txt