'use strict';

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export class CowsAndBulls {
  generatedNumber: number;
  generatedArray: string[];
  inGame: boolean;
  numberOfGuesses: number;
  constructor() {
    this.generatedNumber = Math.floor(Math.random() * 10000);
    this.inGame = true;
    this.numberOfGuesses = 0;
    this.generatedArray = this.generatedNumber.toString().split('');
  }

  getState() {
    if (this.inGame) {
      return 'playing';
    } else {
      return 'finished';
    }
  }

  guess() {
    this.numberOfGuesses++;
    let cows = 0;
    let bulls = 0;
    rl.question(`Guess a number! `, (inputNumber: number) => {
      let inputArray = inputNumber.toString().split('');
      for (let i: number = 0; i < inputArray.length; i++) {
        for (let j: number = 0; j < this.generatedArray.length; j++) {
          if (inputArray[i] === this.generatedArray[i]) {
            cows++;
          } else if (inputArray[i] === this.generatedArray[j] && i !== j) {
            bulls++;
          }
        }
      }
      console.log(`${cows} cow, ${bulls} bull`);
      rl.close();
    });
    if (cows === this.generatedArray.length && bulls === this.generatedArray.length) {
      this.inGame = false;
    } else {
      this.guess();
    }
  }

}


let jatek = new CowsAndBulls();
jatek.guess();
