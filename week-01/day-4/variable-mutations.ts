'use strict';

let a: number = 3;
a += 10;

console.log(a);

let b: number = 100;
b -= 10;

console.log(b);

let c: number = 44;
c = 2 * c;

console.log(c);

let d: number = 125;
d = d/5;

console.log(d);

let e: number = 8;
e = e*e*e;

console.log(e);

let f1: number = 123;
let f2: number = 345;
let checkf1: boolean = f1-f2 > 0;
console.log(checkf1);

let g1: number = 350;
let g2: number = 200;
let checkg2: boolean = g2*2 > g1;
console.log(checkg2);

let h: number = 1357988018575474;
let checkh: boolean = h%11 == 0;
console.log(checkh);

let i1: number = 10;
let i2: number = 3;
let checki1: boolean = i2**3 > i1 && i1 > i2*i2;

let j: number = 1521;
let checkj: boolean = j%3 === 0 || j%5 === 0;