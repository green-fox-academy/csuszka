'use strict';

const button = document.querySelector('button');
const listElements = document.querySelectorAll('li');
const result = document.querySelector('.result');

button.onclick = () => {
  result.innerText = listElements.length;
};
