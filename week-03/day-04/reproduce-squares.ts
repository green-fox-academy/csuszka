'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

//Draw the fractal
function drawFractal(canvasWidth: number, canvasLength: number) {
  if (canvasWidth > 10) {
    drawRectangle(canvasLength, 0, canvasWidth/3, canvasLength);
    drawRectangle(0, canvasWidth/3, canvasLength, canvasWidth/3);
   drawFractal(canvasWidth/3, canvasLength/3);
    //drawFractal(coordinateX-sideLength/2, coordinateY, sideLength/2);
    //drawFractal(coordinateX, coordinateY+sideLength/2, sideLength/2);
    //drawFractal(coordinateX, coordinateY-sideLength/2, sideLength/2);
  }
}

// Draw one rectangle
function drawRectangle(x: number, y: number, width: number, length: number) {
  ctx.strokeStyle = 'green';
  ctx.strokeRect(x, y, width, length);
}

drawFractal(999,999);

