'use strict';

class Pirate {
  rumCounter: number = 0;
  parrotCounter: number = 0;
  alive: boolean = true;
  passedOut: boolean = false;
  state:string;

  drinksomeRum() {
    this.rumCounter++;
  }

  howsItGoingMate() {
    if (this.alive) {
      if (0 <= this.rumCounter && this.rumCounter <= 4) {
        console.log('Pour me anudder!')
      } else {
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
      }
    } else {
      console.log('He\'s dead :(');
    }
  }
  addParrot(){
    this.parrotCounter++;
  }

  stealParrot(){
    this.parrotCounter--;
  }

  die() {
    this.alive = false;
  }

  brawl(matey: Pirate) {
    if (this.alive) {
      {
        if (matey.alive) {
          let fate: number = Math.random();
          if (fate <= 1 / 3) {
            matey.die();
          }
          else if (1 / 3 < fate && fate <= 2 / 3) {
            this.die();
          } else {
            this.passedOut=true;
            matey.passedOut=true;
            console.log('Oh. They both passed out. I wonder if they still need their loot.')
          }
        } else {
          console.log('No time to waste on this one, he\'s dead');
        }
      }
    } else {
      console.log('He\'s dead :(');
    }
  }
  getState(){
    if(this.alive){
      if(this.passedOut){
        return 'passed out';
      }else{
        return 'fine';
      }
    }else{
      return 'dead';
    }
  }
}

// Create a Pirate class. While you can add other fields and methods, you must have these methods:

// drinkSomeRum() - intoxicates the Pirate some
// howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
// 0 to 4 times, "Pour me anudder!"
// else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.
// If you manage to get this far, then you can try to do the following.

// die() - this kills off the pirate, in which case, DrinkSomeRum, etc. just result in he's dead.
// brawl(x) - where pirate fights another pirate (if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.
// And... if you get that far...

// Add a parrot.

export { Pirate }