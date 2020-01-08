'use strict';

import { Animal } from './Animal';

export class Reptile extends Animal {
  constructor(name: string, age: number = 100, breed: string = 'oviparous') {
    super(name, age, breed);
  }

}