'use strict';
import { fibonacci } from './Fibonacci';
import test from 'tape';

let fib10 = fibonacci(10);

test('testing fibonacci until 10', function (t) {
  t.equal(fib10, 34);
  t.end();
})