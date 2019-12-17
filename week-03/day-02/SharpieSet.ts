'use strict';

import { Sharpie } from './Sharpie';

class SharpieSet {
  listOfSharpie: Sharpie[];

  constructor(sharpies) {
    this.listOfSharpie = sharpies;
  }

  countUsable() {
    let counter = 0;
    for (let i: number = 0; i < this.listOfSharpie.length; i++) {
      if (this.listOfSharpie[i].inkAmount !== 0) {
        counter++;
      }
    }
    console.log('number of usable sharpies: ' + counter);
  }

  removeTrash() {
    for (let i: number = 0; i < this.listOfSharpie.length; i++) {
      if (this.listOfSharpie[i].inkAmount === 0) {
        this.listOfSharpie.splice(i, 1);
      }
    }
  }

  getList() {
    for (let i: number = 0; i < this.listOfSharpie.length; i++) {
      console.log(this.listOfSharpie[i]);
    }
  }
}

let sharpiz = [new Sharpie('red', 5, 10),
new Sharpie('green', 5, 17),
new Sharpie('blue', 5, 100),
new Sharpie('yellow', 5, 43),
new Sharpie('purple', 5, 0),
];

let shrpSt = new SharpieSet(sharpiz);
shrpSt.countUsable();
shrpSt.removeTrash();
shrpSt.getList();

// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies