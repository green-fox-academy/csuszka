'use strict';

export class CowsAndBulls {
  generatedNumber: number;
  generatedArray: string[];
  inGame: boolean;
  numberOfGuesses: number;
  cows: number;
  bulls: number;
  constructor() {
    this.generatedNumber = Math.floor(Math.random() * 10000);
    this.inGame = true;
    this.numberOfGuesses = 0;
    this.generatedArray = this.generatedNumber.toString().split('');
    this.cows = 0;
    this.bulls = 0;

  }

  getState() {
    if (this.inGame) {
      return 'playing';
    } else {
      return 'finished';
    }
  }

  guess(inputNumber: number) {
    this.numberOfGuesses++;
    this.cows = 0;
    this.bulls = 0;
    let inputArray = inputNumber.toString().split('');
    for (let i: number = 0; i < inputArray.length; i++) {
      for (let j: number = 0; j < this.generatedArray.length; j++) {
        if (inputArray[i] === this.generatedArray[i]) {
          this.cows++;
        } else if (inputArray[i] === this.generatedArray[j] && i !== j) {
          this.bulls++;
        }
      }
    }
    console.log(`${this.cows} cow, ${this.bulls} bull`);
    if (this.cows === this.generatedArray.length && this.bulls === this.generatedArray.length) {
      this.inGame = false;
    }
    return `${this.cows} cow, ${this.bulls} bull`;
  }

  getCows() {
    return this.cows;
  }

  getBulls() {
    return this.bulls;
  }

}


let jatek = new CowsAndBulls();
jatek.guess(1984);
console.log(jatek);
jatek.guess(1122);
console.log(jatek);
jatek.guess(2134);
console.log(jatek);