'use strict';

for (let i = 1; i < 9; i++) {
    let line = '';

    if (i % 2 !== 0) {
        for (let j = 1; j < 9; j++) {

            if (j % 2 !== 0) {
                line = line + '%';
            } else {
                line = line + ' ';
            }
        }
    }

    if (i % 2 === 0) {
        for (let j = 1; j < 9; j++) {

            if (j % 2 !== 0) {
                line = line + ' ';
            } else {
                line = line + '%';
            }
        }
    }
    console.log(line)
}

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//