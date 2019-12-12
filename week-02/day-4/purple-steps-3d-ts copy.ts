'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function purpleSteps(startPosX: number, startPosY: number, startSideLength: number, rateOfGrowth: number, fillColor: string, strokeColor: string): void {
  for (let i: number = 1; i <= 6; i = i * rateOfGrowth) {
    ctx.fillStyle = fillColor;
    ctx.fillRect(startPosX * i, startPosX * i, startSideLength * i, startSideLength * i);

    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(startPosX * i, startPosX * i, startSideLength * i, startSideLength * i);
  }
}

purpleSteps(5, 5, 5, 1, 'purple', 'black');