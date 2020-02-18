'use strict';

var promise = new Promise(function (fulfill, reject) {
 setTimeout(() => reject(new Error('REJECTED!')), 300)
})
.then(()=>{}, onReject);

function onReject (error) {
  console.log(error.message);
}

// Your solution here