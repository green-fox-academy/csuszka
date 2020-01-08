'use strict';

import { Animal } from './Animal';

export class Mammal extends Animal {
  constructor(name: string, age: number = 10, breed: string = 'viviparous') {
    super(name, age, breed);
  }

}