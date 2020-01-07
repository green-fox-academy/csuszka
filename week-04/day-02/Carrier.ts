'use strict'

import { Aircraft } from './Aircraft';
import { F16 } from './F16';
import { F35 } from './F35';

class Carrier {
  private listOfAircrafts: Aircraft[] = [];
  private storeOfAmmo: number;
  private healthPoints: number;

  constructor(ammo: number, hp: number) {
    this.storeOfAmmo = ammo;
    this.healthPoints = hp;
  }

  add(type: string): void {
    if (type === 'F35') {
      this.listOfAircrafts.push(new F35());
    } else if (type === 'F16') {
      this.listOfAircrafts.push(new F16());
    }
  }

  fill(): void {
    if (this.storeOfAmmo === 0) {
      throw 'There is no ammo';
    } else {
      for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
        if (this.listOfAircrafts[i].isPriority()) {
          this.storeOfAmmo = this.listOfAircrafts[i].refill(this.storeOfAmmo);
        }
      }
      for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
        if (!this.listOfAircrafts[i].isPriority()) {
          this.storeOfAmmo = this.listOfAircrafts[i].refill(this.storeOfAmmo);
        }
      }
    }
  }

  getAllDamage(): number {
    let allDamage = 0;
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      allDamage = allDamage + this.listOfAircrafts[i].getMaxDamage();
    }
    return allDamage;
  }

  fight(someCarrier: Carrier): void {
    someCarrier.healthPoints = someCarrier.healthPoints - this.getAllDamage();
  }

  getAircraftList(): string {
    let list: string = '';
    for (let i: number = 0; i < this.listOfAircrafts.length; i++) {
      list = list + this.listOfAircrafts[i].getStatus() + '\r\n';
    }
    return list;
  }

  getStatus(): string {
    if (this.healthPoints === 0) {
      return `It's dead Jim :(`;
    }
    return `HP: ${this.healthPoints}, Aircraft count: ${this.listOfAircrafts.length}, Ammo Storage: ${this.storeOfAmmo}, Total Damage: ${this.getAllDamage()}, Aircrafts: 
${this.getAircraftList()}`;
  }
}

let motherShip = new Carrier(2300, 5000);
motherShip.add('F35');
motherShip.add('F35');
motherShip.add('F35');
motherShip.add('F16');
motherShip.add('F16');
motherShip.fill();
console.log(motherShip.getStatus());