
'use strict';

let lineCount3: number = 8;
let changesDirectionAfter: number;


if (lineCount3 % 2 > 0) {
    changesDirectionAfter = lineCount3 / 2 + 0.5;
}
else {
    changesDirectionAfter = lineCount3 / 2;
}

console.log('The diamond changes direction after the line' + changesDirectionAfter);

/* upper half*/

for (let i = 1; i <= lineCount3; i++) {

    let spaces: string = '';
    let stars: string = '*';


    if (i <= changesDirectionAfter) {

        for (let m = 1; m <= changesDirectionAfter - i; m++) {
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

        let spacelimit: number;
        if (lineCount3 % 2 > 0) {
            spacelimit = i - changesDirectionAfter;
        }
        else {
            spacelimit = i - changesDirectionAfter - 1;
        }

        for (let t = 1; t <= spacelimit; t++) {
            spaces = spaces + ' ';
        }
        if (i > changesDirectionAfter) {
            for (let w = 1; w <= lineCount3 - i; w++) {
                stars = stars + '**';
            }
        }
    }


    console.log(spaces + stars);
}



// Write a program that draws a
// diamond like this:
//
//   * 1
//  *** 3
// ***** 5 
//******* 7
// ***** 5
//  *** 3 
//   * 1
//
// The diamond should have as many lines as lineCount is