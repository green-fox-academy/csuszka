'use strict';

let myPromise = new Promise((resolve, reject) =>{
  resolve('YEEE')
})

let myPromise2 = Promise.reject(new Error('BOOO'))
myPromise2.catch(err => {console.log(err.message)});