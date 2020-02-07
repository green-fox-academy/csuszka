'use strict';

function makeMatrix(string, matrixWidth) {
  let returningMatrix = [];
  for (let i = 0; i < matrixWidth; i++) {
    let row = [];
    for (let j = i; j < (i + matrixWidth); j++) {
      row.push(string[j]);
    }
    returningMatrix.push(row);
  }
  return returningMatrix;
}
console.log(makeMatrix('pizza', 3));