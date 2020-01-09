'use strict';

export function fibonacci(sequenceIndex: number): number {
  function fib(x: number): number {
    if (x === 1) {
      return 0;
    } else if (x === 2) {
      return 1;
    } else {
      return fib(x - 2) + fib(x - 1);
    }
  }

  return fib(sequenceIndex);
}