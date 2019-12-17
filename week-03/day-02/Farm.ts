'use strict';

import { Animal } from './Animal'

class Farm {
  slots: number;
  animalList: Animal[];

  constructor(animals: Animal[], freeSlots: number) {
    this.animalList = animals;
    this.slots = freeSlots;
  }

  breed(hunger: number, thirst: number) {
    if (this.slots === 0) {
      console.log('There is no living space for a new animal');
    } else {
      this.animalList.push(new Animal(hunger, thirst));
    }
  }

  slaughter() {
    let counter;
    let indexOfLeastHungry: number;
    for (let i: number = 0; i < this.animalList.length; i++) {
      if (i === 1) {
        counter = this.animalList[i].hunger;
      } else if (this.animalList[i].hunger < counter) {
        counter = this.animalList[i].hunger;
      }
    }
    for (let i: number = 0; i < this.animalList.length; i++) {
      if (this.animalList[i].hunger === counter) {
        indexOfLeastHungry = i;
      }
    }
    this.animalList.splice(indexOfLeastHungry, 1);
  }

  getList() {
    console.log(this.animalList);
  }
}

let animalArray = [
  new Animal(10, 2),
  new Animal(20, 4),
  new Animal(1, 40),
  new Animal(32, 7),
];

let smallFarm = new Farm(animalArray, 10);
smallFarm.getList();
smallFarm.breed(100, 100);
smallFarm.getList();
smallFarm.slaughter();
smallFarm.getList();

// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal