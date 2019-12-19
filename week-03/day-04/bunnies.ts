'use strict';

function bunny(bun: number): number {
  if (bun === 1) {
    return 2;
  } else {
    return 2 * bunny(bun - 1);
  }
}

console.log(bunny(10));