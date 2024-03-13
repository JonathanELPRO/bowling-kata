class Game {
  constructor() {
    this._score = 0;
  }
  roll(pins){
    this._score= this._score+pins
  }
  score(){
    return this._score
  }

  
}

export default Game;

