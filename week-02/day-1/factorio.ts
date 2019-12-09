// -  Create a function called `factorio`
//    that returns it's input's factorial

'use strict';

let factorialOf: number = 5;

function factorio(input: number): number {
    let factorial = 1;
    for (let i: number = 1; i <= factorialOf; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

console.log(factorio(factorialOf));