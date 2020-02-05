'use strict';

const nav = document.querySelector('nav');
const inspector = document.querySelector('.img-inspector');
let parameters = {
  'size': 200,
  'right': 0,
  'bottom': 0,
}

nav.addEventListener('click', (e) => {
  if (event.target.innerText === 'Zoom in') {
    parameters.size += 20;
    inspector.setAttribute('style', `background-size: ${parameters.size}%; background-position: right ${parameters.right}px bottom ${parameters.bottom}px;`);
  }
  if (event.target.innerText === 'Zoom out') {
    parameters.size -= 20;
    inspector.setAttribute('style', `background-size: ${parameters.size}%; background-position: right ${parameters.right}px bottom ${parameters.bottom}px;`);
  } 
  if (event.target.innerText === 'Up') {
    parameters.bottom += 10;
    inspector.setAttribute('style', `background-size: ${parameters.size}%; background-position: right ${parameters.right}px bottom ${parameters.bottom}px;`);
  }
  if (event.target.innerText === 'Down') {
    parameters.bottom -= 10;
    inspector.setAttribute('style', `background-size: ${parameters.size}%; background-position: right ${parameters.right}px bottom ${parameters.bottom}px;`);
  }
  if (event.target.innerText === 'Left') {
    parameters.right += 10;
    inspector.setAttribute('style', `background-size: ${parameters.size}%; background-position: right ${parameters.right}px bottom ${parameters.bottom}px;`);
  }
  if (event.target.innerText === 'Right') {
    parameters.right -= 10;
    inspector.setAttribute('style', `background-size: ${parameters.size}%; background-position: right ${parameters.right}px bottom ${parameters.bottom}px;`);
  }
});
