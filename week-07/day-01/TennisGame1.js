'use strict';

let TennisGame1 = class {
  player1Score = 0;
  player2Score = 0;
  player1Name;
  player2Name;
  pointSystem = [
    ['Love-All', 'Love-Fifteen', 'Love-Thirty', 'Love-Forty'],
    ['Fifteen-Love', 'Fifteen-All', 'Fifteen-Thirty', 'Fifteen-Forty'],
    ['Thirty-Love', 'Thirty-Fifteen', 'Thirty-All', 'Thirty-Forty'],
    ['Forty-Love', 'Forty-Fifteen', 'Forty-Thirty', 'Deuce'],
  ];

  constructor(player1Name, player2Name) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName) {
    playerName === 'player1' ? this.player1Score++ : this.player2Score++;
  }

  getScore() {
    if (this.winner()) {
      return this.winner();
    } else if (this.advantage()) {
      return this.advantage();
    } else {
      return this.lowScores();
    }
  }

  winner() {
    if (this.player1Score > 3 || this.player2Score > 3) {
      this.player1Win();
      this.player2Win();
    }
  }

  player1Win() {
    if (this.player1Score >= this.player2Score + 2) {
      return 'Win for player1';
    }
  }

  player2Win() {
    if (this.player2Score >= this.player1Score + 2) {
      return 'Win for player2';
    }
  }

  lowScores() {
    if (this.player1Score < 4 && this.player2Score < 4) {
      return this.pointSystem[this.player1Score][this.player2Score];
    }
  }

  advantage() {
    if (this.player1Score > 3 && this.player2Score > 3) {
      this.player1Score > this.player2Score ? 'Advantage player1' : 'Advantage player2';
    }
  }
};

let tg = new TennisGame1('player1', 'player2');
tg.wonPoint('player1');
tg.wonPoint('player1');
tg.wonPoint('player2');
console.log(tg.lowScores());

if (typeof window === "undefined") {
  module.exports = TennisGame1;
}
