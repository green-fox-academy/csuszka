'use strict';
import test from 'tape';
import { Sharpie } from '../../week-03/day-02/Sharpie';

let myTestSharpie = new Sharpie('red', 100, 80);

test('testing sharpie color input', function (t) {
  t.equal(myTestSharpie.color, 'red');
  t.end();
})

test('testing sharpie width input', function (t) {
  t.equal(myTestSharpie.width, 100);
  t.end();
})

test('testing sharpie ink input', function (t) {
  t.equal(myTestSharpie.inkAmount, 80);
  t.end();
})