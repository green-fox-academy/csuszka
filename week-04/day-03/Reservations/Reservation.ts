'use strict';

export class Reservation {
  dowBooking: string;
  codeBooking: string;

  constructor() {
    let code: string = '';
    let availableCharacters: (string | number)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i: number = 0; i < 8; i++) {
      code += availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    }
    this.codeBooking = code;

    let week: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    this.dowBooking = week[Math.floor(Math.random() * week.length)];
  }

  getDowBooking(): string {
    return this.dowBooking;
  };
  getCodeBooking(): string {
    return this.codeBooking;
  };
  getAllData(): string {
    return `Booking# ${this.codeBooking} for ${this.dowBooking}`;
  }
}