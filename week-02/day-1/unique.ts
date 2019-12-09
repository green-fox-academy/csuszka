//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once

'use strict';

function unique(arr: number[]): number[] {
    let uniqueArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) == -1) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

//  Example
console.log(unique([1, 11, 34, 11, 52, 61, 1, 34]))
//  should print: `[1, 11, 34, 52, 61]`