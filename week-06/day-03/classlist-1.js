'use strict';

let paragraphs = document.querySelectorAll('p');

if (paragraphs[3].getAttribute('class') === 'dolphin') {
    paragraphs[0].innerText = 'pear';
}
if (paragraphs[0].getAttribute('class') === 'apple') {
    paragraphs[2].innerText = 'dog';
}

paragraphs[0].setAttribute('class', 'red');
paragraphs[1].style.borderRadius = '50%';
paragraphs[1].style.height = '100px';
paragraphs[1].style.width = '75px';