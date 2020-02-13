'use strict';

const APIKey = '0k0XK18UGfVyHx5qyfccT04bMSzxuB8M';
const APIEndpoint = 'https://api.giphy.com/v1/gifs/search';
const category = 'funny'
const pictureContainer = document.querySelector('main');

const xhr = new XMLHttpRequest();
const generatedRequestURL = APIEndpoint + '?api_key=' + APIKey + '&q=' + category + '&limit=16&offset=0&rating=G&lang=en';
console.log(generatedRequestURL);

xhr.open('GET', generatedRequestURL, true);
xhr.send();
xhr.onreadystatechange = (event) => {
  //console.log(event.target.readyState);
  if (event.target.readyState === 4 && event.target.status === 200) {
    let incomingData = JSON.parse(xhr.response);
    console.log(incomingData);
    for (let gif of incomingData.data){
      let thumbnail = document.createElement('div');
      thumbnail.innerHTML = `<a href ="${gif.url}" target="_blank"><img src = "${gif.images.fixed_width_small_still.url}" alt = "funny gif"></a> `
      console.log(thumbnail.innerHTML);
      pictureContainer.appendChild(thumbnail);
    }
  }
}