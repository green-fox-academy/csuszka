'use strict';

let lineCount5: number = 6;

for (let i = 1; i <= lineCount5; i++) {
    let line = ''
    if (i === 1 || i === lineCount5) {
        for (let j = 1; j <= lineCount5; j++) {
            line = line + '%';
        }
    } else {
        for (let k = 1; k <= lineCount5; k++){
            if (k ===1 || k === lineCount5){
                line = line + '%';
            } else {
                line = line + ' ';
            }
        }

    }


    console.log(line);
}