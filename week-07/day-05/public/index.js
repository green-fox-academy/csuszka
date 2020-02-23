'use strict';

window.onload = () => {
  let xhr = new XMLHttpRequest;
  xhr.open('GET', 'http://localhost:3000/posts');
  xhr.send();
  xhr.onload = (response) => {
    console.log(JSON.parse(response.target.response));
  }
}