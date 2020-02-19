'use strict';

let jokeContainer = document.querySelector('h1');
let buttonElement = document.querySelector('button');
let URL = 'http://api.icndb.com/jokes/random';

buttonElement.addEventListener('click', (e) =>{
  fetch(URL)
  .then(result => {
    console.log(result.status);
    return result;
  })
  .then(result => result.json())
  .then(result => jokeContainer.innerText = result.value.joke)
  .catch(() => jokeContainer.innerText = 'Something went wrong :(')
});