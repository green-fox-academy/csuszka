'use strict';

const h1 = document.querySelector('h1');

window.addEventListener('keyup', (event) => {
  console.log(event);
  h1.innerText =  `Last pressed key code is: ${event.code}`;
});