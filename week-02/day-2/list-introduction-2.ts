'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
let listB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

if (listA.indexOf('Durian') === -1) {
    console.log('No')
} else { 
    console.log('Yes') }
listB.splice(listB.indexOf('Durian'), 1);
listA.splice(4, 0, 'Kiwifruit');
if (listA.length > listB.length) {
    console.log('A is bigger')
} else {
    console.log('B is bigger')
}
let avocadoIndex: number = listA.indexOf('Avocado');
let durianIndex: number = listB.indexOf('Durian');
listB.push('Passion Fruit', 'Pomelo');
console.log(listA[3]);

// Create a list ('List A') which contains the following values
// Apple, Avocado, Blueberries, Durian, Lychee
// Create a new list ('List B') with the values of List A
// Print out whether List A contains Durian or not
// Remove Durian from List B
// Add Kiwifruit to List A after the 4th element
// Compare the size of List A and List B
// Get the index of Avocado from List A
// Get the index of Durian from List B
// Add Passion Fruit and Pomelo to List B in a single statement
// Print out the 3rd element from List A