'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  Returns the indices of the numbers in the array of which the first number is a part of
//  Or returns an empty list if the number is not part of any of the numbers in the array

function subint(needle: number, haystack: number[]): number[] {
  let result: number[] = [];
  /* going through the input array*/
  for (let i: number = 0; i < haystack.length; i++) {
    /*evaluation of a given array element*/
    let divideThis: number = haystack[i];
    for (divideThis; divideThis >=1; divideThis = divideThis) {
      console.log(divideThis);

      if (divideThis % 10 === needle || Math.floor(divideThis / 10) === needle) {
        result.push[i];
        divideThis = Math.floor(divideThis / 10);
      } else {
        divideThis = Math.floor(divideThis / 10);
      }

    }
    
  }
  return result;
}

// Test
console.log(subint(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(subint(9, [1, 11, 34, 52, 61]));
// should print: '[]'