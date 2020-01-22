'use strict';

let king = document.querySelector('#b325').innerText;
console.log(king);
//console.log gives back the contents, but console.dir gives back properties as well
// aler halts the whole script running, noting after it gets executed

let businessLamp = document.querySelectorAll('.big');
console.log(businessLamp);
console.log(businessLamp[0].innerText);
console.log(businessLamp[1].innerText);

let conceitedKing = document.querySelector('.container').children;
alert(conceitedKing[0].innerText);
alert(conceitedKing[1].innerText);

let noBusiness = document.querySelectorAll('div');
console.log(noBusiness[0].innerText, noBusiness[1].innerText, noBusiness[2].innerText);