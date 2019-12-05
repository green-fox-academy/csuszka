
/* NOT COMPLETED YET */

'use strict';

let lineCount3: number = 7;
let changesDirectionAfter: number = lineCount3 / 2 + 1;
/* upper half*/

for (let i = 1; i <= lineCount3; i++) {

    let spaces: string = '';
    let stars: string = '*';

    if (i <= changesDirectionAfter) {

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

        for (let t = 1; t <= changesDirectionAfter - 1; t++) {
            spaces = spaces + ' ';
        }
        if (i <= lineCount3 - 1) {
            for (let w = changesDirectionAfter + 1; w <= lineCount3 - 1; w--) {
                stars = stars + '**';
            }
        }
    }


    console.log(spaces + stars);
}



// Write a program that draws a
// diamond like this:
//
//   *
//  ***
// *****
//*******
// *****
//  ***
//   *
//
// The diamond should have as many lines as lineCount is