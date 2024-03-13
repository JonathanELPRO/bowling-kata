import Game from "./bowlingKata.js";

describe("bowlingKata", () => {
  it("Debería crearse la clase juego pero vacía", () => {
    const myGame = new Game();
    expect(myGame).toBeDefined();
  });
  function rollMany(n,pins){
    for (let i=0;i<n;i++)
    {
      g.roll(pins);
    }
  }
  const g = new Game();
  it("Debería tirar 20 veces el jugador derribando cero pinos en cada tiro obteniendo un score de 0", () => {
    rollMany(20,0)
    expect(g.score()).toEqual(0);
  });
  it("Debería tirar 20 veces el jugador derribando un pino en cada tiro obteniendo un score de 20", () => {
    
    rollMany(20,1)
    expect(g.score()).toEqual(20);
  });
});