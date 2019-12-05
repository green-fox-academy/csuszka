
'use strict';

// Swap the values of these variables
let p: number = 123;
let r: number = 526;

let q = p;
let s = r;

p = s;
r = q;

console.log(p);
console.log(r);