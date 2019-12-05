
'use strict';

let lineCount2: number = 4;

for (let i = 1; i <= lineCount2; i++) {

    let spaces: string = '';
    let stars: string = '*';

    for (let m = 1; m <= lineCount2 - i; m++) {
        spaces = spaces + ' ';
    }

    if (i >= 2) {
        for (let j = 2; j <= i; j++) {
            stars = stars + '**';
        }
    }

    console.log(spaces + stars);
}


// Write a program that draws a
// pyramid like this:
//
//   *
//  ***
// *****
//*******
//
// The pyramid should have as many lines as lineCount is