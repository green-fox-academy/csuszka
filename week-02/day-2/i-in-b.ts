'use strict';

let b = {a: 1, b: 2, c: 3};
for(let i in b) {
 // console.log(i);
  //console.log(b[i]);
  if(b[i] == 2){
    console.log(i);
  }
}