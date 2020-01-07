'use strict'

function potter(arr: number[]): void {
  //basic cost: 8, 2 ugyanolyan: 5%, 3 10%, 4 20%, 5 25%
  /*for (let i: number = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
    }
  }*/

  while(arr.every(element => element > 0)){
    arr.forEach(element => element-1);
  }

}

console.log(potter([2, 2, 2, 1, 1]));
console.log(potter([1, 0, 3, 0, 2]));
console.log(potter([2, 1, 1, 1, 1]));

