'use strict';

class Postit {
  backgroundColor: string;
  text: string;
  textColor: string;
  constructor(bgcol: string, text: string, textCol: string) {
    this.backgroundColor = bgcol;
    this.text = text;
    this.textColor = textCol;
  }
}

let post1 = new Postit('orange', 'Idea 1', 'blue');
let post2 = new Postit('pink', 'Awsome', 'black');
let post3 = new Postit('yellow', 'Superb!', 'green');

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

export {Postit};