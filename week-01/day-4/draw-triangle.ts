'use strict';

let lineCount: number = 4;

/*for (let i = 1; i <= lineCount; i++){
    console.log('*'.repeat(i));
}*/



for (let i = 1; i <= lineCount; i++){
    let stars: string = '';
    for (let j = 1; j <= i; j++){
stars = stars + '*';
    }
console.log(stars);
}