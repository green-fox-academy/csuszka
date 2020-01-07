'use strict';

class NumberConverter {
  num: number;

  constructor(inputNumber: number) {
    this.num = inputNumber;
  }

  toText():string {
    let arrZero: string[] = this.num.toString().split('');
    let arr: number[] = arrZero.forEach(element => parseInt(element, 10));
    console.log(arr);

    if (arr[arr.length - 2] === 1 && arr.length - 1 !== 0) {
      let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      let singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
      return singles[arr[arr.length-3]+1] +'hundred' + tens[arr[arr.length-2]+1] + ' dollars'
    } else {
      let tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      let singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    }
  }



}

NumberConverter(715);
console.log(NumberConverter.toText());