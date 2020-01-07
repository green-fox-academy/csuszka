'use strict'

import { Student } from './Student';
import { Mentor } from './Mentor';

class Cohort {
  name: string;
  students: Student[];
  mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  addStudent(Student: Student) {
    this.students.push(Student);
  }

  addMentor(Mentor: Mentor) {
    this.mentors.push(Mentor);
  }

  info() {
    console.log(`The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`);
  }
}

let people = [];

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);


let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();