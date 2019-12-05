'use strict';

let lineCount4: number = 6;

for (let i = 1; i <= lineCount4; i++) {
    let line = ''
    if (i === 1 || i === lineCount4) {
        for (let j = 1; j <= lineCount4; j++) {
            line = line + '%';
        }
    } else {
        for (let k = 1; k <= lineCount4; k++){
            if (k ===1 || k === lineCount4 || k === i){
                line = line + '%';
            } else {
                line = line + ' ';
            }
        }

    }


    console.log(line);
}

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is