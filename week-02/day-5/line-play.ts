'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// drawing the net

function drawNet(distance: number, color1: string, color2: string, canvasSize): void {
  //green lines
  ctx.beginPath();
  ctx.strokeStyle = color1;
  for (let i: number = 0; i * distance < canvasSize; i++) {
    ctx.moveTo(0, i * distance);
    ctx.lineTo(distance * (i + 1), canvasSize);
    ctx.stroke();
  }
  //purple lines
  ctx.beginPath();
  ctx.strokeStyle = color2;
  for (let j: number = 0; j * distance < canvasSize; j++) {
    ctx.moveTo(canvasSize, (j + 1) * distance);
    ctx.lineTo(j * distance, 0);
    ctx.stroke();
  }
}
drawNet(100, 'green', 'purple', 500);