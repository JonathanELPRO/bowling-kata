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
    let i=0
    for (let frame=0; frame< 10;frame++)
    {
      if (this._rolls[i]+this._rolls[i+1]==10)//spare
      {
        score=score+10+this._rolls[i+2]
        i=i+2
      }
      else
      {
        score=score+this._rolls[i]+this._rolls[i+1]
        i=i+2
      }
      
    }
    return score
  }

  
}

export default Game;

