class Game {
  constructor() {
    this._score = 0;
    this.rolls = new Array(21);
    this.currentRoll = 0;
  }
  roll(pins){
    this._score= this._score+pins
    this.rolls[this.currentRoll++]=pins;
 
  }
  score(){
    return this._score
  }

  
}

export default Game;

