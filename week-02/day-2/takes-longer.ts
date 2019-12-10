'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
//making temporary array, because splice would only return the part that was spliced in, not the changed array.
let temporaryArray: string[] = quote.split(' ');
temporaryArray.splice(3,0,'always takes longer than'); 
quote = temporaryArray.join(' ');

console.log(quote);