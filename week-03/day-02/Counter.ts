'use strict';

class Counter {
  integer: number;
  initializedWith: number;

  constructor(int: number = 0) {
  this.integer = int;
  this.initializedWith = int;
  }

  add(num?: number) {
    if (num) {
      this.integer = this.integer + num;
    }
    else {
      this.integer++;
    }
  }

  get(): number {
    return this.integer;
  }

  reset() {
    this.integer = this.initializedWith;
  }
}

let myCOunter = new Counter(30);

myCOunter.add(20);
console.log(myCOunter.get());
myCOunter.reset();
console.log(myCOunter.get());


// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

export { Counter };