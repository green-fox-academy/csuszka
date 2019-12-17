'use strict';

import { Student } from './Student';

class Teacher {
  teach(student: Student): void {
    student.learn();
  }

  answer(): void {
    console.log('the teacher is answering the student');
  }
}

// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

export { Teacher };