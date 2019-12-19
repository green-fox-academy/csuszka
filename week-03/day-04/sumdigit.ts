'use strict';

function sumDig(num: number): number {
  if (num / 10 < 1) {
    return num;
  } else {

    return num % 10 + sumDig(Math.floor(num / 10));
  }
}

console.log(sumDig(41265));