'use strict';

import test from 'tape';
import { Animal } from '../day-03/Zoo/Animal';

let chicken = new Animal('chicken', 1, 'oviparous')

test('testing animal name input for chicken', function (t) {
  t.equal(chicken.getName(), chicken);
  t.end();
})