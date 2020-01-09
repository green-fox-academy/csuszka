'use strict';

export function countLetters(str: string): object {
  let returningObject: { [key: string]: number; } = {};
  for (let i: number = 0; i < str.length; i++) {
    if(returningObject.hasOwnProperty(str[i])){
      returningObject[str[i]]++;
    } else{
      returningObject[str[i]] = 1;
    }
  }
  return returningObject;
}