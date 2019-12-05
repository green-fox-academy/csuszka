'use strict';

let l: number = 24;
let out: number = 0;

if (l%2 == 0){
    out += 1
}
console.log(out);

let zeNumberrr: number = 13;
let out2: string = '';

if (zeNumberrr < 10){
    out2 ='Less!';
} else if (10 <= zeNumberrr && zeNumberrr <= 20){
    out2 ='Sweet!';
} else {
    out2 ='More!';
}
console.log(out2);

let efleflef: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus == false){
    efleflef = efleflef - 2;
} else if(credits < 50 && isBonus == false){
    efleflef -= 1;
}
console.log(efleflef);

let blob: number =  8;
let time: number = 120;
let out3: string = '';

if (time > 200){
    out3 = 'Time out!';
}else if (time <= 200 && blob%4 === 0){
    out3 = 'check';
}else {
    out3 = 'Run Forest Run!';
}
console.log(out3);