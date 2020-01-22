'use strict';

const asteroidsUL = document.querySelector('.asteroids');
asteroidsUL.removeChild(document.querySelector('li'));

const planetData = [
    { category: 'inhabited', content: 'Foxes', asteroid: true },
    { category: 'inhabited', content: 'Whales and Rabbits', asteroid: true },
    { category: 'uninhabited', content: 'Baobabs and Roses', asteroid: true },
    { category: 'inhabited', content: 'Giant monsters', asteroid: false },
    { category: 'inhabited', content: 'Sheep', asteroid: true }
];

planetData.forEach(element => {
    if (element.asteroid) {
        const li = document.createElement('li');
        li.setAttribute('class', element.category);
        li.innerText = element.content;
        asteroidsUL.appendChild(li);
    }
});