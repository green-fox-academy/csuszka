
'use strict';

let lineCount2: number = 4;

for (let i = 1; i <= lineCount2; i++) {
    
    let spaces: string = '';
    let stars: string = '';

    for (let k = lineCount2-1; k > 0; k--) {
        spaces = spaces + ' ';
    }
    for (let j = 1; j <= i; j++) {
        stars = stars + '*';
    }
    console.log(spaces + stars);
}