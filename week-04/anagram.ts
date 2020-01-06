'use strict';


function anagram(string1: string, string2: string): boolean {
  let array1 = string1.split('').sort();
  let array2 = string2.split('').sort();
  for (let i: number = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(anagram('maunika', 'kecske'));
console.log(anagram('listen', 'silent'));