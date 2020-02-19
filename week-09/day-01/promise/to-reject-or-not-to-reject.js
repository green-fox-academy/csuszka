'use strict'

let onRejected = error => console.log(error.message);
let myPromise = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject (new Error('I DID NOT FIRE'));
}).then(() => {console.log('I FIRED')}, onRejected);


