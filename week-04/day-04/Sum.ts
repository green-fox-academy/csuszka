'use strict';

export class Sum {
  integerList: number[];

  constructor(integerList: number[]) {
    this.integerList = integerList;
  }

  sum() {
    let sum = 0;
    for (let i: number = 0; i < this.integerList.length; i++) {
      sum += this.integerList[i];
    }
    return sum;
  }
  
}