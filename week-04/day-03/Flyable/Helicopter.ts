'use strict';

import { Flyable } from './Flyable';
import { Vehicle } from './Vehicle';

export class Helicopter extends Vehicle implements Flyable {
  constructor(color: string, mileage: number = 0, serial: string) {
    super(color, mileage, serial);
  }
  land(): boolean {
    return true;
  };
  fly(): boolean {
    return true;
  };
  takeOff(): boolean {
    return true
  };
}