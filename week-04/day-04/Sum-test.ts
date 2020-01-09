'use strict';

import test from 'tape';
import {Sum} from './Sum';

let result = new Sum([1,2,3,4,5,6,7,8,9]); 

test('checking sum ability', function(t){
  t.equal(result.sum(), 45);
  t.end();
})