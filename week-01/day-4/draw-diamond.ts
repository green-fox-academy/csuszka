'use strict';

let lineCount3: number = 7;

/* upper half*/

for (let i = 1; i <= lineCount3; i++) {

    let spaces: string = '';
    let stars: string = '*';

    if (i < lineCount3 / 2 + 1) {

        for (let m = 1; m <= lineCount3 - i; m++) {
            spaces = spaces + ' ';
        }

        if (i >= 2) {
            for (let j = 2; j <= i; j++) {
                stars = stars + '**';
            }
        }
    }
    /*lower half*/
    else {



    }


    console.log(spaces + stars);
}



// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is