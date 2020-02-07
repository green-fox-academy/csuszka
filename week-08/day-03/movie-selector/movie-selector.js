'use strict';

const genreSelector = document.querySelector('#genre-select');
const movieSelector = document.querySelector('#movie-select');
const selectedMovieDisplay = document.querySelector('.selected');
let movieList = [
  {genre: 'sci-fi', title: 'Moon'},
  {genre: 'sci-fi', title: 'A Space Odyssey'},
  {genre: 'drama sci-fi', title: 'Contact'},
  {genre: 'drama', title: 'Darkest Hour'},
  {genre: 'drama', title: 'There Will Be Blood'},
  {genre: 'drama', title: 'American Beauty'},
  {genre: 'comedy', title: 'Airplane!'},
  {genre: 'comedy', title: 'Deadpool'},
  {genre: 'comedy', title: 'Wayne\'s World'},
  {genre: 'sci-fi', title: 'A Space Odyssey'}
];

movieList.forEach(e=> {
  let genreList = [];
  if(genreList.)
})
genreSelector.appendChild()
genreSelector.addEventListener('change', (e) => {

    if (e.target.value !== movies[i].className && movies[i].className !== "") {
      movies[i].className = movies[i].className + " hidden";
    }
})

movieSelector.addEventListener('change', (e) => {
  selectedMovieDisplay.innerText = `The selected movie is: ${e.target.value}`;
});