'use strict';

function pow(base: number, power: number): number {
  if (base === 1) {
    return 1;
  } else if (power === 1) {
    return base;
  } else {
    return base * pow(base, power - 1);
  }
}

console.log(pow(2, 3));