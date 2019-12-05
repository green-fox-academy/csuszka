'use strict';

let dailyCodingHours: number = 6;
let semesterWeeks: number = 17;
let semesterCoding: number = dailyCodingHours*semesterWeeks*5;

// hours spent with coding in a semester by an attendee
console.log(semesterCoding);

//percentage of coding hours in the semester if the average
console.log (Math.round(semesterCoding*100/(52*semesterWeeks)) + "%");