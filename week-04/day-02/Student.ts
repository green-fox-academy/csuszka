'use strict';

import {Person} from './Person';

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female', org: string = 'The School of Life') {
    super();
    this.previousOrganization = org;
    this.skippedDays = 0;
  }

  introduce() {
    console.log(`Hi, I'\m ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  getGoal() {
    console.log('My goal is: Be a junior software developer.');
  }

  skipDays(numberOfDays:number) {
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}