'use strict';

let uList = document.querySelector('ul');

let greenFox = document.createElement('li');
greenFox.innerText = 'The Green Fox';
uList.appendChild(greenFox); // Chaining may not work as expected, due to appendChild() returning the child element

let lamp = document.createElement('li');
lamp.innerText = 'The Lamp Lighter';
uList.appendChild(lamp);

let container = document.querySelector('.container');
let h1 = document.createElement('H1');
h1.innerText = 'I can add elements to the DOM';
container.appendChild(h1);

let picture = document.createElement('img');
picture.setAttribute('src', 'https://www.pethealthnetwork.com/sites/default/files/cat-diarrhea-when-is-it-serious-and-how-do-i-stop-it-483371318.jpg');
container.appendChild(picture);