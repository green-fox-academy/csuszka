'use strict';

const button = document.querySelector('button');
const result = document.querySelector('.result');

window.onload = (event) => {
  let breaking = () => {
    return;
  }
  button.addEventListener('click', breaking);
  setTimeout(() => {
    let counter = 0;
    button.removeEventListener('click', breaking);
    button.addEventListener('click', (e) => {
      counter++;
      console.log('got clicked', counter, result.innerText);
      if (counter === 3) {
        result.innerText = '5 seconds elapsed and clicked 3 times';
      }
    })
  }, 5000)
};