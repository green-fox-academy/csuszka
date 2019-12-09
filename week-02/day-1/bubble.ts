
//  Create a function that takes a list of numbers as parameter
//  Returns a list where the elements are sorted in ascending numerical order
//  Make a second boolean parameter, if it's `true` sort that list descending

// arr [1] => arr[0]


'use.strict';

function bubble(arr: number[], beDescending?: boolean): number[] {
  for (let a: number = 0; a < arr.length; a++) {
    /*going through the array once*/
    for (let i: number = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        let temporary: number = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temporary;
      }
    }
  }
  if (beDescending === false) {
    return arr;
  }
  else {
    let descending: number[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      descending.push(arr[i]);
    }
    return descending;
  }
}

//  Tests:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(bubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]