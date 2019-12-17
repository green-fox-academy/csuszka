'use strict';

import { Car } from './Car'

class Station {
  gasAmount: number;

  constructor(amount?: number) {
    if (amount) {
      this.gasAmount = amount;
    }
  }

  refill(car) {
    this.gasAmount = this.gasAmount - car.capacity;
  }
}

let verda = new Car();
let myStation = new Station(1000);
console.log('töltés előtt ' + myStation.gasAmount);
myStation.refill(verda);
console.log('töltés után ' + myStation.gasAmount);


// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

export { Station };