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
    let frameIndex=0
    for (let frame=0; frame< 10;frame++)
    {
      if (this._rolls[frameIndex]==10) //strike
      {
        score=score+10+this.strikeBonus(frameIndex)
        frameIndex++
      }
      else if (this.isSpare(frameIndex))//spare
      {
        score=score+10+this.spareBonus(frameIndex)
        frameIndex=frameIndex+2
      }
      else
      {
        score=score+this.summOfBallsInFrame(frameIndex)
        frameIndex=frameIndex+2
      }
      
    }
    return score
  }
  isSpare(frameIndex){
    return this._rolls[frameIndex]+this._rolls[frameIndex+1]==10
  }
  spareBonus(frameIndex)
  {
    return this._rolls[frameIndex+2]
  }
  strikeBonus(frameIndex)
  {
    return this._rolls[frameIndex+1]+this._rolls[frameIndex+2]
  }
  summOfBallsInFrame(frameIndex)
  {
    return this._rolls[frameIndex]+this._rolls[frameIndex+1]
  }
  
}

export default Game;

