'use strict';

const form = document.querySelector('form');
const victor = document.querySelector('#goldfish')
const yesRadioButton = document.querySelector('#yes');
const noRadioButton = document.querySelector('#no');
const signUpButton = document.querySelector('#signUpButton');
const iLoveCatsButton = document.querySelector('#loveCatsButton')

form.addEventListener('click', (e) => {
  if (signUpButton.hasAttribute('disabled') && (e.target.id === 'cat' || e.target.id === 'dog' || e.target.id === 'goldfish')) {
    signUpButton.removeAttribute('disabled');
  }
  if (e.target.id === 'yes') {
    iLoveCatsButton.removeAttribute('disabled');
  }
  if (e.target.id === 'no') {
    iLoveCatsButton.setAttribute('disabled', true);
  }
  if (e.target === signUpButton && yesRadioButton.checked) {
    alert('Thank you, you\'ve successfully signed up for cat facts');
  }
  if (e.target === signUpButton && noRadioButton.checked && victor.checked) {
    alert('Sigh, we still added you to the cat facts list');
  }
});