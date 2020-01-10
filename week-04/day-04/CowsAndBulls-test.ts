'use strict';

import test from 'tape';
import {CowsAndBulls} from './CowsAndBulls'

test('constructor variable initilaization', function (t){
t.equal((new CowsAndBulls).numberOfGuesses, 0 );
t.ok((new CowsAndBulls).generatedNumber);
t.equal((new CowsAndBulls).generatedNumber / 1000 > 1 && 10000 > (new CowsAndBulls).generatedNumber , true);
t.ok((new CowsAndBulls).inGame);
t.equal((new CowsAndBulls).generatedArray.length, 4 );
t.end();
})

test('state method initializes with true', function (t){
  t.ok((new CowsAndBulls).getState());
  t.end();
  })

  test('guess method returns numbers less than 5', function (t){
    let boci = new CowsAndBulls();
    boci.guess(1984);
    t.equal(boci.getCows() < 5, true );
    t.equal(boci.getBulls() < 5, true );
    t.end();
    })