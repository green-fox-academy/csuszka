'use strict';

class Animal {
  hunger: number;
  thirst: number;

  constructor(hun:number = 50, thi: number = 50){
    this.hunger = hun;
    this.thirst = thi;
  }
  eat(){
    this.hunger--;
  }
  drink(){
    this.thirst--;
  }
  play(){
    this.thirst++;
    this.hunger++;
  }
}

// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

export {Animal};