'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillRect(10, 10, 10, 10);

//DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function purpleSteps(startPosX: number, startPosY: number, startSideLength: number, rateOfGrowth: number, fillColor: string, strokeColor: string): void {
  for (let i: number = 1; i <= 6; i = i * rateOfGrowth) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(startPosX * i, startPosX * i, startSideLength * i, startSideLength * i);

    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(startPosX * i, startPosX * i, startSideLength * i, startSideLength * i);
  }
}

purpleSteps(5, 5, 5, 1, 'purple', 'black');

export{};