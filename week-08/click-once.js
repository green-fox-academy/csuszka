'use strict';

const button = document.querySelector('button');

let counter = 0;

button.addEventListener('click', (event) => {
  if (counter < 1) {
    counter++;
    console.log(Date.now());
  }
});

