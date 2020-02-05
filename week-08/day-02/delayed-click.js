'use strict';

let button = document.querySelector('button');
let result = document.querySelector('.result');

button.onclick = () => {
  setTimeout(() => {
    result.innerText = '2 seconds ellapsed';
  }, 2000)
}
