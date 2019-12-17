'use strict';

import { Thing } from './thing';
import { Fleet } from './fleet';



class FleetOfThings {
  fleet: Fleet;

  // consturctor{
  //   this.fleet = new Fleet();
  // }

  main() {
    this.fleet = new Fleet();
  }

  print() {
    let thingsArray = this.fleet.getThings();
    for (let i: number = 0; i < thingsArray.length; i++) {
      if (thingsArray[i].getCompleted() == true) {
        console.log('[x] ' + thingsArray[i].getName());
      } else {
        console.log('[ ] ' + thingsArray[i].getName());
      }
    }
  }
}

let fleetOfToDo = new FleetOfThings();
fleetOfToDo.main();
fleetOfToDo.fleet.add(new Thing('Get milk'));
fleetOfToDo.fleet.add(new Thing('Remove the obstacles'));
fleetOfToDo.fleet.add(new Thing('Stand up'));
fleetOfToDo.fleet.getThings()[2].complete();
fleetOfToDo.fleet.add(new Thing('Eat lunch'));
fleetOfToDo.fleet.getThings()[3].complete();
fleetOfToDo.print();


// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well 