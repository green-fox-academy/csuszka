'use strict';

import test from 'tape';
import { countLetters } from './CountLetters';

let testCase = countLetters('Torta');
let testObject = { 'T': 1, 'o': 1, 'r': 1, 't': 1, 'a': 1 }

test('testing couting object', function (t) {
  t.deepEqual(testCase, testObject);
  t.end();
});