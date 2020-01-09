'use strict';

export class Anagram {
  string1: string;
  string2: string;

  constructor(string1: string, string2: string) {
    this.string1 = string1;
    this.string2 = string2;
  }

  getResult(): boolean {
    let array1 = this.string1.split('').sort();
    let array2 = this.string2.split('').sort();
    for (let i: number = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
}