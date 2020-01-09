'use strict';

import test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 2 and 3 is 5', function (t: any): any {
  t.equal(add(2, 7), 9);
  t.end();
});

test('add: 1 and 4 is 5', function (t: any): any {
  t.equal(add(1, 10), 11);
  t.end();
});

test('max of three: first', function (t: any): any {
  t.equal(maxOfThree(5, 9, 3), 9);
  t.end();
});

test('max of three: third', function (t: any): any {
  t.equal(maxOfThree(3, 100, 5), 100);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([9, 5, 3, 7]), 6);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 90, 4, 5]), 4);
  t.end();
});

test('is vowel: z', function (t: any): any {
  t.notOk(isVowel('z'));
  t.end();
});

test('is vowel: r', function (t: any): any {
  t.notOk(isVowel('r'));
  t.end();
});

test('is vowel: e', function(t: any): any {
  t.ok(isVowel('e'));
  t.end();
});

test('translate: bemutatkozik', function (t: any): any {
  t.equal(translate('bemutatkozik'), 'bevemuvutavatkovozivik');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});