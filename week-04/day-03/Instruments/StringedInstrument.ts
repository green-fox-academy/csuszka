'use strict';

import { Instrument } from './Instrument';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;
  constructor(name: string, numberOfStrings: number = 96) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): string;

  play(): void {
    console.log(`${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`);
  }

}
