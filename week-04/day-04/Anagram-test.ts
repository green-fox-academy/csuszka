'use strict';
import test from 'tape';
import { Anagram } from './Anagram';
import { endianness } from 'os';

let xFiles = new Anagram('Scully', 'Mulder');

test('Anagram true-false test', function (t) {
  t.equal(xFiles.getResult(), false);
  t.end();
})