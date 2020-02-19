'use strict';

let myPromise = new Promise ((resolve, result) => {
resolve('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');