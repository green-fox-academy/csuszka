'use strict';

const candyCreator = document.querySelector('.create-candies');
const lollipopBuyer = document.querySelector('.buy-lollypops');
const candyRain = document.querySelector('.candy-machine');
const speed = document.querySelector('.speed');
const lollipopDisplay = document.querySelector('.lollypops');
const candyDisplay = document.querySelector('.candies');
const candyLimit = 10000;
let candies = 700;
let lollipops = 3;
let generation = 1;

setInterval(() => {
  candies += generation * Math.floor(lollipops / 10);
  speed.innerText = `${generation * Math.floor(lollipops / 10)}`;
  candyDisplay.innerText = candies;
}, 1000);

candyRain.addEventListener('click', () => generation *= 10);

candyCreator.addEventListener('click', () => {
  candies++;
  candyDisplay.innerText = candies;
});

lollipopBuyer.addEventListener('click', () => {
  if (candies > 99) {
    lollipops++;
    candies -= 100;
    lollipopDisplay.innerText = lollipopDisplay.innerText + '🍭';
    candyDisplay.innerText = candies;
  }
});