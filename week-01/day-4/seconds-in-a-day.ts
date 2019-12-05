'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

let secondsRightNow: number = currentHours*3600 + currentMinutes*60 + currentSeconds;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

console.log (((24*3600 - secondsRightNow) + ' seconds remaining'));