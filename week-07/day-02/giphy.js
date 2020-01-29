'use strict';

let APIKey = '0k0XK18UGfVyHx5qyfccT04bMSzxuB8M';
let APIEndpoint = 'api.giphy.com/v1/gifs/search';
let category = 'funny'

let httpRequest = new XMLHttpRequest();
let generatedRequestURL = APIEndpoint + '?api_key=' + APIKey + '&q=' + category;
console.log(generatedRequestURL);
httpRequest.open('GET', generatedRequestURL, true);
httpRequest.onreadystatechange = (event) => {
  console.log(event.target.readyState);
  if (event.target.readyState === 4 && event.target.status === 200) {
    let incomingData = JSON.parse.response;
    console.log(incomingData);
  }
}