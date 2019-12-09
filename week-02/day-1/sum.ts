// Write a function called `sum` that returns the sum of numbers from zero to the given parameter
'use strict';

let parameter: number = 5;

function sum (input: number): number {
    let sum = 0;
    for (let i: number = 0; i <= input; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum(parameter));