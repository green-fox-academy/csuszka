'use strict';

export class Vehicle {
  color: string;
  mileage: number;
  serial: string;

  constructor(color: string, mileage: number = 0, serial: string) {
    this.color = color;
    this.mileage = mileage;
    this.serial = serial;
  }
}