'use strict';

export class Animal {
  protected name: string;
  protected age: number;
  protected breedMethod: string;

  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breedMethod = breed;
  }

  getName(): string {
    return this.name;
  }

  breed(): string {
    if (this.breedMethod === 'viviparous') {
      return 'pushing miniature versions out';
    }
    else if (this.breedMethod === 'oviparous') {
      return 'laying eggs';
    } else {
      return 'a mysterious way';
    }
  }

}
