'use strict';

import test from 'tape';


class Apple {
  getApple() {
    return 'Apple';
  }
}

let golden = new Apple(); 

test(function(t){
t.equal(golden.getApple(), 'Apple');
t.end();
});