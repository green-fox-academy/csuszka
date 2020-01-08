'use strict';

import { Reservation } from './Reservation';

for (let i: number = 0; i < 20; i++) {
  console.log(new Reservation().getAllData());
}