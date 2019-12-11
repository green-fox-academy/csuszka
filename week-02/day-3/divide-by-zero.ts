'use strict';

function divideBy(num: number): void {
  // if this manual error throw is not here, it will console.log Infinity, and no error will be seen
  if (num === 0) {
    throw new Error ('Scully you are not gonna believe this'); 
  }
  let result:number = 10 / num;
  console.log(result);
}

try {
  divideBy(0);
} catch (error) {
  console.log('fail');
}

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0