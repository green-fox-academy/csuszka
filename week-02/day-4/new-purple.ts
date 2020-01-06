'use strict';

// Boilerplate
const canvas = document.querySelector('.canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Draw a rectangle
function purpleSteps(patternNumber: number, fillColor: string, strokeColor: string): void {
  let coordinate = patternNumber;
  for (let i: number = 0; i < 6; i++) {
    ctx.fillStyle = fillColor;
    coordinate = coordinate + patternNumber * i;
    ctx.fillRect(coordinate, coordinate, patternNumber * (i + 1), patternNumber * (i + 1));

    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(coordinate, coordinate, patternNumber * (i + 1), patternNumber * (i + 1));
  }
}

purpleSteps(10, 'purple', 'black');

export {};