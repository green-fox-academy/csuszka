'use strict';

import { Animal } from '../Zoo/Animal';
import { Flyable } from './Flyable';

export class Bird extends Animal implements Flyable {
  constructor(name: string, age: number = 5, breed: string = 'oviparous') {
    super(name, age, breed);
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