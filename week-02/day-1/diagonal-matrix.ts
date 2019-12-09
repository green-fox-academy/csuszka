// -  Create (dynamically*) a two dimensional list
//    with the following matrix**. Use a loop!
//
//    0 0 0 1
//    0 0 1 0
//    0 1 0 0
//    1 0 0 0
//
// -  Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array

'use strict'

let matrixNumber: number = 4;

let myMatrix: number[][] = [];

/* rows*/
for (let i: number = 1; i <= matrixNumber; i++) {
    let row: number[] = [];
    /*columns*/
    for (let j: number = 1; j <= matrixNumber; j++) {
        if (j === matrixNumber + 1 - i) {
            row.push(1);
        } else {
            row.push(0);
        }
    }
    myMatrix.push(row);
}

console.log(myMatrix);
console.table(myMatrix);