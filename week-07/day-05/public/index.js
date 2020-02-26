'use strict';

const main = document.querySelector('main');
const sidebarTitle = document.querySelector('.sidebar-title');

function loadPage() {
  const xhr = new XMLHttpRequest;
  xhr.open('GET', 'http://localhost:3000/posts');
  xhr.send();
  xhr.onload = (response) => {
    let postArray = JSON.parse(response.target.response).posts;
    postArray.forEach((post, index) => createPostRow(post, index));
  }
}

window.onload = () => loadPage();

sidebarTitle.addEventListener('click', () => {
  main.innerHTML = '';
  let form = document.createElement('form');
  form.className = 'form';
  //form.setAttribute('action', '');
  //form.setAttribute('method', 'POST');
  form.innerHTML = `<label for='title'>title</label><input id='title' type='title' required autofocus> <label for='url'>URL</label><input id='url' type='url'><button class='submit-button' type='submit'>SUBMIT</button>`;
  main.appendChild(form);

  let title = document.querySelector('#title');
  let url = document.querySelector('#url');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(title.value);
    const xhrpost = new XMLHttpRequest();
    xhrpost.open('POST', 'http://localhost:3000/posts');
    xhrpost.setRequestHeader('Content-Type', 'application/JSON');
    xhrpost.send(JSON.stringify({ title: title.value, url: url.value, owner: 'Maunika' }));
    form.reset();
    xhrpost.onload = (response) => {
      console.log(response.target.status);
      if (response.target.status >= 200 && response.target.status < 400) {
        main.innerHTML = '';
        loadPage();
      } else {
        console.log('Error');
      }
    }
  })
});

function createPostRow(post, index) {
  let timeDifference = Date.now() - post.timestamp;
  let time = '';
  if (timeDifference <= 60000) {
    time += 'less than a minute ago';
  } else if (60000 <= timeDifference && timeDifference < 3600000) {
    time += `${Math.floor(timeDifference / 60000)} minutes ago`;
  } else if (3600000 <= timeDifference && timeDifference < 86400000) {
    time += `${Math.floor(timeDifference / 3600000)} hours ago`;
  } else if (86400000 <= timeDifference && timeDifference < 31536000000) {
    time += `${Math.floor(timeDifference / 86400000)} days ago`;
  } else {
    time += `${Math.floor(timeDifference / 31536000000)} days ago`;
  }
  let main = document.querySelector('main');
  let postContainer = document.createElement('div');
  postContainer.className += 'post-container';
  main.appendChild(postContainer);

  let postPositionBox = document.createElement('div');
  postPositionBox.className += 'post-position-box';
  postPositionBox.innerText = index + 1;

  let voteContainerBox = document.createElement('div');
  voteContainerBox.className += 'vote-container-box';
  let upvoteBox = document.createElement('div');
  upvoteBox.innerHTML = '<img src = "img/upvote.png" class = "upvote"></img>';
  let currentVotesBox = document.createElement('div');
  currentVotesBox.innerText = post.score;
  let downvoteBox = document.createElement('div');
  downvoteBox.innerHTML = '<img src = "/img/downvote.png" class = "downvote"></img>';
  voteContainerBox.appendChild(upvoteBox);
  voteContainerBox.appendChild(currentVotesBox);
  voteContainerBox.appendChild(downvoteBox);

  let contentContainerBox = document.createElement('div');
  contentContainerBox.className += 'content-container-box';
  let titleBox = document.createElement('div');
  titleBox.className += 'title-box';
  titleBox.innerHTML = `<a target="_blank" href= "${post.url}">${post.title}</a>`;
  let postInfoBox = document.createElement('div');
  postInfoBox.className += 'post-info-box';
  postInfoBox.innerHTML = `<p>submitted ${time} ago by <strong>${post.owner}</strong></p>`;
  contentContainerBox.appendChild(titleBox);
  contentContainerBox.appendChild(postInfoBox);

  postContainer.appendChild(postPositionBox);
  postContainer.appendChild(voteContainerBox);
  postContainer.appendChild(contentContainerBox);

  voteContainerBox.addEventListener('click', (e) => {
    if (e.target.className === 'upvote') {
      const xhr = new XMLHttpRequest;
      xhr.open('PUT', `http://localhost:3000/posts/${post.post_id}/upvote`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onload = (response) => {
        if (response.target.status >= 200 && response.target.status < 400) {
          console.log(JSON.parse(response.target.response))
          //loadPage();
          downvoteBox.innerHTML = '<img src = "/img/downvote.png" class = "downvote"></img>';
          upvoteBox.innerHTML = '<img src = "img/upvoted.png" class = "upvote"></img>';
          currentVotesBox.innerText =  JSON.parse(response.target.response)[0].score;
        }
      }
    } else if (e.target.className === 'downvote') {
      const xhr = new XMLHttpRequest;
      xhr.open('PUT', `http://localhost:3000/posts/${post.post_id}/downvote`);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onload = (response) => {
        if (response.target.status >= 200 && response.target.status < 400) {
          
          //loadPage();
          upvoteBox.innerHTML = '<img src = "img/upvote.png" class = "upvote"></img>';
          downvoteBox.innerHTML = '<img src = "/img/downvoted.png" class = "downvote"></img>';
          currentVotesBox.innerText = JSON.parse(response.target.response)[0].score;
        }
      }
    }
  });
}