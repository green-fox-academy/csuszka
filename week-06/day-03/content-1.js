'use strict';

let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
for (let i = 0; i < paragraphs.length - 1; i++) {
    paragraphs[i].innerHTML = paragraphs[i + 1].innerHTML;
}
console.log(paragraphs);