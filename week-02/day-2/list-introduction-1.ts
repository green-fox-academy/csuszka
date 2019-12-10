'use strict'

let names: string[] = [];
names.push('William');
names.push('John');
names.push('Amanda');
console.log(names);
console.log(names[2]);

names.forEach(function (element) {
  console.log(element);
});

names.forEach(function (element, index) {
  console.log(index + 1 + ". " + element);
});

names.splice(1, 1);

for (let i: number = names.length - 1; i > -1; i--) {
  console.log(names[i]);
}

names.splice(0);
console.log(names);
// Create an empty list which will contain names (strings)
// Print out the number of elements in the list
// Add William to the list
// Print out whether the list is empty or not
// Add John to the list
// Add Amanda to the list
// Print out the number of elements in the list
// Print out the 3rd element
// Iterate through the list and print out each name
// William
// John
// Amanda
// Iterate through the list and print
// 1. William
// 2. John
// 3. Amanda
// Remove the 2nd element
// Iterate through the list in a reversed order and print out each name
// Amanda
// William
// Remove all element