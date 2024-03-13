class Game {
  constructor() {
    this._rolls = new Array(21);
    this._currentRoll = 0;
  }
  roll(pins){
    this._rolls[this._currentRoll++]=pins;
 
  }
  score(){
    let score=0
    for (let i=0; i< this._currentRoll;i++)
    {
      score=score+this._rolls[i]
    }
    return score
  }

  
}

export default Game;

