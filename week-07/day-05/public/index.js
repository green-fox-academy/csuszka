'use strict';




let xhr = new XMLHttpRequest;
xhr.open('GET', 'http://localhost:3000/posts');
xhr.send();
xhr.onload = (response) => {
  // console.log(JSON.parse(response.target.response).posts);
  let postArray = JSON.parse(response.target.response).posts;
  console.log(postArray);
  postArray.forEach((post, index) => createPostRow(post, index));
  const upvote = document.querySelector('.upvote');
  const downvote = document.querySelector('.downvote');
}


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
}



// httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');