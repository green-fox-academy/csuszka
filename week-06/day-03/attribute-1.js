'use strict';

let url = document.querySelector('img').getAttribute('src');
console.log(url);

document.querySelector('img').setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtM-Gnb5ivXcKdxwlYEtgnGTjBxpWcjj74GNe7NbvDoIlvNZA&s');

document.querySelector('a').setAttribute('href', 'https://www.greenfoxacademy.com/');

document.querySelector('.this-one').toggleAttribute('disabled');
document.querySelector('.this-one').innerText = 'Don\'t click me';