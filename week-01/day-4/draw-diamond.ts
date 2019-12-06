'use strict';

const lineCount3: number = 12;
let changesDirectionAfter: number;

if (lineCount3 % 2 > 0) {
  changesDirectionAfter = lineCount3 / 2 + 0.5;
}
else {
  changesDirectionAfter = lineCount3 / 2;
}
/* the loop that goes through the whole diamond */
for (let i = 1; i <= lineCount3; i++) {

  let spaces: string = '';
  let stars: string = '*';
  /* upper half*/
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

// draws a diamond like this:
//
// 3   * 1
// 2  *** 3
// 1 ***** 5 
// 0******* 7
// 1 ***** 5
// 2  *** 3 
// 3   * 1