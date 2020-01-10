'use strict';

import test from 'tape';
import {CowsAndBulls} from './CowsAndBulls'

let bocika = new CowsAndBulls();

test('constructor variable initilaization', function (t){
t.equal(bocika.numberOfGuesses, 0 );
t.ok(bocika.generatedNumber);
t.equal(bocika.generatedNumber / 1000 > 1 && 10000 > bocika.generatedNumber , true);
t.ok(bocika.inGame);
console.log(bocika.generatedArray.length);
t.equal(bocika.generatedArray.length, 4 );
t.end();
})

test('state method initializes with true', function (t){
  t.ok(bocika.getState());
  t.end();
  })

  test('guess method returns numbers less than 5', function (t){
    bocika.guess(1984);
    t.equal(bocika.getCows() < 5, true );
    t.equal(bocika.getBulls() < 5, true );
    t.end();
    })